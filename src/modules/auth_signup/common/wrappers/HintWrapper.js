import React from 'react'
import { View, Platform, Image, TouchableOpacity, Text } from 'react-native'
import { em, colors } from '~/common/constants'

const HintWrapper = ({ children, onGoBack, onClose }) => (
  <View style={{
    flex: 1, position: 'relative', 
    paddingHorizontal: 20*em,
    backgroundColor: '#fff'
  }}>
    <Header onGoBack={onGoBack} onClose={onClose} />
    {children}
  </View>
)

const Header = ({ onGoBack, onClose }) => (
  <View style={{
    marginTop: 60*em, marginBottom: 30*em,
    flexDirection: 'row', justifyContent: 'space-between'
  }}>
    <View>
      <TouchableOpacity onPress={onGoBack}>
        <Image source={require('~/common/assets/images/png/arrow.png')}
          style={{width: 13*em, height: 20*em, tintColor: '#35cdfa'}}
        />
      </TouchableOpacity>  
    </View>
    <View>
      <Image source={require('~/common/assets/images/png/Union-32.png')}
        style={{width: 79*em, height: 18*em,}}
      />
    </View>
    <View>
      <TouchableOpacity onPress={onClose}>
        <Image source={require('~/common/assets/images/png/cross.png')}
          style={{width: 16*em, height: 16*em, marginTop: 2*em}}
        />
      </TouchableOpacity>  
    </View>
  </View>
)

export default HintWrapper
