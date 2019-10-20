import React from 'react'
import { View,Text } from 'react-native'
import MapView from '../../common/components/MapView'
import MapButton from '../../common/components/MapButton'
import UnlockBox from './components/UnlockBox'
import { W, H } from '~/common/constants'
import Menu from '~/modules/profile/common/components/Menu'

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
        <MapView
          currentLocation={currentLocation} places={places}
        >
          <MapButton name='profile' 
            onPress={
              () => this.setState({...this.state, profileOpened: true})
            }
          />
          <MapButton name='gift' />
          <MapButton name='search' />
          <MapButton name='refresh' />
          <MapButton name='position' />
        </MapView>
        <UnlockBox onPress={this.onUnlock} _t={_t}/>
        <Menu 
          isShowable={profileOpened} 
          onClose={()=> 
            this.setState({...this.state, profileOpened: false })
          }
        />
      </View>
    )
  }

  onUnlock = () => {

  }
}
