import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import MapView from '../../common/components/MapView'
import MapButton from '../../common/components/MapButton'
import UnlockBox from './components/UnlockBox'
import { W, H } from '~/common/constants'
import Menu from '~/modules/profile/modals/menu/ViewContainer'
import { Actions } from 'react-native-router-flux'

export default class ScreenView extends React.Component {
  state = {
    profileOpened: false
  }

  componentDidMount() {
    this.props.mapActions.doSearchMarkers()
  }

  render() {
    const { currentLocation, places } = this.props.map
    const { _t } = this.props.appActions
    const { profileOpened } = this.state

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
          currentLocation={currentLocation} places={places}
        >
          <MapButton name='profile' 
            onPress={() => 
              this.setState({...this.state, profileOpened: true})
            }
          />
          <MapButton name='gift' 
            onPress={() => {
            }}
          />
          <MapButton name='search' />
          <MapButton name='refresh' />
          <MapButton name='position' />
        </MapView>
        <UnlockBox onPress={this.onUnlock} _t={_t}/>
      </View>
    )
  }

  onUnlock = () => {

  }
}
