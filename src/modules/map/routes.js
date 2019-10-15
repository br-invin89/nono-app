import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import FirstScreen from './screens/first/ViewContainer'

const MapStack = (
  <Stack key={'map'} initial>
    <Scene 
      key='map_first'
      hideNavBar
      component={FirstScreen}
      initial
    />
  </Stack>
)

export default MapStack
