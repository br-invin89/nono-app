import React from 'react'
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { Spacer } from '~/common/components'
import { Actions } from 'react-native-router-flux'
import { W, H, colors, em } from '~/common/constants'

export default class ScreenView extends React.Component {
  state = {
    adjust: {
      containerHeight: H
    },    
    codes: ['', '', '', '', '', '']
  }

  render() {
    const { _t } = this.props.appActions
    return (
      <View style={{
        width: W, height: this.state.adjust.containerHeight, 
        backgroundColor: colors.primaryBackground,
        position: 'relative'
      }}>
        <Spacer size={120} />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>
            {_t('Enter the code')}
          </Text>
          <Text style={{ fontSize: 15, color: 'white' }}>
            {_t('The code is located under the QR Code')}
          </Text>
        </View>
        <Spacer size={80} />
        {this.renderForm()}
        {this.renderActionButtons()}
      </View>
    )
  }

  renderForm() {
    let { codes } = this.state

    return (
      <View style={{ 
        paddingHorizontal: 10, 
        flexDirection: 'row', justifyContent: 'space-between'
      }}>
        {codes.map((code, k) => (
          <TextInput key={k} value={code}
            onChangeText={val => {
              codes[k] = val
              this.setState({...this.state, codes})
            }}
            style={{
              width: 50*em, textAlign: 'center', color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.5)', borderBottomWidth: 2
            }}
            onFocus={() => {
              let { adjust } = this.state
              adjust.containerHeight = H-250
              this.setState({...this.state, adjust})
            }} 
            onBlur={() => {
              let { adjust } = this.state
              adjust.containerHeight = H
              this.setState({...this.state, adjust})
            }} 
            maxLength={1}
            onSubmitEditing={this.enterCode}
          />
        ))}
      </View>
    )
  }

  renderActionButtons() {
    return (
      <React.Fragment>
        <ActionButton containerStyle={{ right: 10, bottom: 68 }}
          image={require('~/common/assets/images/png/flash-QR-code.png')} 
        />
        <ActionButton containerStyle={{ left: 10, bottom: 14 }}
          image={require('~/common/assets/images/png/cross.png')} 
        />
        <ActionButton containerStyle={{ right: 10, bottom: 14 }}
          image={require('~/common/assets/images/png/qr-code.png')} 
        />
      </React.Fragment>
    )
  }

  enterCode = () => {
    var isValid = true
    const { codes } = this.state
    codes.map((code, k) => {
      if (code=='') isValid = false
    })
    if (!isValid) return

    Actions['map_first']({initialModal: 'rent'})
  }
}

const ActionButton = (props) => (
  <TouchableOpacity style={[{
    width: 44, height: 44,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'absolute', borderRadius: 12
  }, props.containerStyle]}>
    <Image 
      style={{ tintColor: 'white' }}
      source={props.image} 
    />
  </TouchableOpacity>
)
