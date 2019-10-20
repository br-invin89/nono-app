import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import Payment from './screens/payment/ViewContainer'

const ProfileStack = (
  <Stack key={'profile'}>
    <Scene 
      key='profile_payment'
      hideNavBar
      component={Payment}
    />
  </Stack>
)

export default ProfileStack
