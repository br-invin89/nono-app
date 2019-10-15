import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import FirstMenu from './screens/first-menu/ViewContainer'

const ProfileStack = (
  <Stack key={'profile'}>
    <Scene 
      key='profile_menu'
      hideNavBar
      component={FirstMenu}
    />
  </Stack>
)

export default ProfileStack