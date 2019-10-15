import React from 'react'
import { TouchableOpacity, View, Text, TextInput, ImageBackground, StyleSheet } from 'react-native'
import { Toast } from 'native-base'
import { Actions } from 'react-native-router-flux'
import FirstWrapper from '../../common/wrappers/FirstWrapper'
import LogoView from '../../common/components/LogoView'
import { Spacer, Button } from '~/common/components';
import { em, colors } from '~/common/constants'
import commonStyles from '~/common/styles'
import PhoneNumberInput from '../../common/components/PhoneNumberInput'

export default class ScreenView extends React.Component {
  state = {
    phoneNumber: '',
    adjust: {
      mostTop: 180*em
    }
  }

  render() {
    const { phoneNumber } = this.state
    const { _t } = this.props.appActions

    this.showToast()

    return (
      <FirstWrapper>
        <View style={{
          flex: 1,
          alignItems: 'center', justifyContent: 'center',
          paddingHorizontal: 20*em
        }}>
          <View style={{width: '100%'}}>
            <Spacer size={this.state.adjust.mostTop} />
            <LogoView />
            <Spacer size={50*em} />
            <Text style={[commonStyles.text.titleWhite, {fontSize: 26*em, textAlign: 'center'}]}>
              {_t("Connect yourself")}
            </Text>
            <Spacer size={20*em} />
            <PhoneNumberInput placeholder={_t('Mobile number')} 
              phoneNumber={phoneNumber} 
              onChangePhoneNumber={(phoneNumber) => this.setState({...this.state, phoneNumber})} 
              onFocus={() => this.adjustOnTextFocus()}
              onBlur={() => this.adjustOnTextBlur()}
            />
            <Spacer size={20*em} />
            <Button onPress={this.onLogin} caption={_t('Next')} />
            <Spacer size={20*em} />
            <Button onPress={this.onFacebookLogin} 
              caption={_t('Continue with facebook')} 
              icon={require('~/common/assets/images/facebook.png')}
              textColor='#fff'
              bgGradientStart='#48bff3' bgGradientEnd='#00a9f2'
            />
            <Spacer size={30*em} />
            <TouchableOpacity style={{
              width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
            }} onPress={() => this.goSignup()}>
              <Text style={[commonStyles.text.defaultWhite, {fontSize: 14*em}]}>
                {_t("No account?")}
              </Text>
              <Text style={[commonStyles.text.defaultWhite, {fontSize: 14*em, fontWeight: 'bold'}]}>
                {_t('Register yourself')}              
              </Text>
            </TouchableOpacity>
          </View>              
        </View>      
      </FirstWrapper>
    )
  }

  showToast() {
    const { _t } = this.props.appActions
    const { statusMessage } = this.props.auth
    const { clearMessage } = this.props.authActions

    if (statusMessage != '') {
      Toast.show({
        type: 'danger',
        text: _t(statusMessage),
        position: 'top',
      })
      clearMessage()
    }
  }

  onLogin = () => {
    const { phoneNumber } = this.state
    this.props.authActions.tryLogin(phoneNumber)
  }

  onFacebookLogin = () => {

  }

  goSignup = () => {
    Actions['signup']()
  }

  adjustOnTextFocus = () => {
    this.setState({...this.state, adjust: {mostTop: 20*em}})
  }

  adjustOnTextBlur = () => {
    this.setState({...this.state, adjust: {mostTop: 180*em}})
  }

}
