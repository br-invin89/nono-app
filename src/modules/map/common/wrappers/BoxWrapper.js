import React from 'react'
import { View } from 'react-native'
import { W } from '~/common/constants'

const BoxWrapper = ({ children }) => (
  <View style={{
    position: 'absolute', bottom: 0, left: 0, zIndex: 30,
    width: W, height: 120,
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    backgroundColor: '#fff',
    padding: 20
  }}>
    {children}
  </View>
)

export default BoxWrapper
