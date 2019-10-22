import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import MapView from '../../common/components/MapView'
import MapButton from '../../common/components/MapButton'
import UnlockDialog from '../../modals/unlock/ViewContainer'
import SearchDialog from '../../modals/search/ViewContainer'
import DetailDialog from '../../modals/detail/ViewContainer'
import FinishDialog from '../../modals/finish/ViewContainer'
import FinishTopDialog from '../../modals/finish-top/ViewContainer'
import { W, H } from '~/common/constants'
import Menu from '~/modules/profile/modals/menu/ViewContainer'
import { Actions } from 'react-native-router-flux'
import { Spacer } from '~/common/components'

export default class ScreenView extends React.Component {
  state = {
    profileOpened: false,
    activedModal: 'unlock'
  }

  componentDidMount() {
    this.props.mapActions.loadPlacesOnMap()
  }

  render() {
    const { currentLocation, placesOnMap } = this.props.map
    const { _t } = this.props.appActions
    const { profileOpened } = this.state
    const { activedModal } = this.state

    return (
      <View 
        style={{
          position: 'relative', width: W, height: H
        }}
      >
        <Menu 
          isShowable={profileOpened} 
          onClose={()=> 
            this.setState({...this.state, profileOpened: false })
          }
        />
        <MapView
          currentLocation={currentLocation} placesOnMap={placesOnMap}
        >
          <MapButton name='profile' 
            onPress={() => 
              this.setState({...this.state, profileOpened: true})
            }
          />
          <MapButton name='gift' 
            onPress={this.goGift}
          />
          <MapButton name='search' 
            onPress={this.openSearchDialog}
          />
          <MapButton name='refresh' />
          <MapButton name='position' />
        </MapView>
        <Spacer size={20} />
        {activedModal=='unlock' && 
          <UnlockDialog />
        }
        {activedModal=='search' && 
          <SearchDialog onCancel={this.closeSearchDialog} 
            selectPlace={this.selectPlace} 
          />
        }
        {activedModal=='detail' && 
          <DetailDialog onClose={this.closeDetailDialog} 
            onFinish={this.openFinish}
          />
        }
        {activedModal=='finish' && 
          <React.Fragment>
            <FinishTopDialog />
            <FinishDialog onFinish={this.closeFinishDialog} />
          </React.Fragment>
        }
      </View>
    )
  }

  goGift = () => {
    Actions['map_gift']()
  }

  openSearchDialog = () => {
    this.setState({...this.state, activedModal: 'search'})
  }

  closeSearchDialog = () => {
    this.setState({...this.state, activedModal: 'unlock'})
  }

  selectPlace = (index) => {
    this.props.mapActions.selectPlace(index)
    this.setState({ ...this.state, activedModal: 'detail' })
  }

  closeDetailDialog = () => {
    this.setState({...this.state, activedModal: 'unlock'})
  }

  openFinish = () => {
    this.setState({...this.state, activedModal: 'finish'})
  }

  closeFinishDialog = () => {
    this.setState({...this.state, activedModal: 'unlock'})
  }
}
