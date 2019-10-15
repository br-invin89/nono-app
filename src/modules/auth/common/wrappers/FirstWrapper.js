import React from 'react'
import { View, ImageBackground } from 'react-native'

const FirstWrapper = ({ children }) => (
  <View style={{
    flex: 1, position: 'relative', 
  }}>
  <ImageBackground
    source={require('~/common/assets/images/png/login-bg.jpg')}
    style={{
       flex: 1, 
    }}
    resizeMode='cover'
  >
    {children}
  </ImageBackground>
  </View>
)

export default FirstWrapper
