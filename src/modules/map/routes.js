import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import FirstScreen from './screens/first/ViewContainer'
import GiftScreen from './screens/gift/ViewContainer'

const MapStack = (
  <Stack key={'map'}>
    <Scene 
      key='map_first'
      hideNavBar
      component={FirstScreen}
    />
    <Scene 
      key='map_gift'
      hideNavBar
      component={GiftScreen}
      
    />
  </Stack>
)

export default MapStack
