import React from 'react'
import { TouchableOpacity, View, Text, TextInput, ImageBackground, StyleSheet } from 'react-native'
import { Toast } from 'native-base'
import { Actions } from 'react-native-router-flux'
import FirstWrapper from '../../../auth/common/wrappers/FirstWrapper'
import LogoView from '../../../auth/common/components/LogoView'
import { Spacer, Button } from '~/common/components';
import { em, colors } from '~/common/constants'
import commonStyles from '~/common/styles'
import PhoneNumberInput from '../../../auth/common/components/PhoneNumberInput'

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

    return (
      <FirstWrapper>
        <View style={{
          flex: 1,
          alignItems: 'center', justifyContent: 'space-around',
          paddingHorizontal: 20*em
        }}>
          <View style={{width: '100%'}}>
            <Spacer size={this.state.adjust.mostTop} />
            <LogoView />
            <Spacer size={50*em} />
            <Text style={[commonStyles.text.titleWhite, {fontSize: 26*em, textAlign: 'center'}]}>
              {_t("Register yourself")}
            </Text>
            <Spacer size={20*em} />
            <PhoneNumberInput placeholder={_t('Mobile number')}
              phoneNumber={phoneNumber} 
              onChangePhoneNumber={(phoneNumber) => this.setState({...this.state, phoneNumber})} 
              onFocus={this.adjustOnTextFocus}
              onBlur={this.adjustOnTextBlur}
            />
            <Spacer size={20*em} />
            <Button onPress={this.goNext} caption={_t('Next')} />
            <Text style={[commonStyles.text.defaultWhite, {textAlign: 'center', fontSize: 12*em}]}>
              {_t("We will send you an SMS to check your number")}
            </Text>
            <Spacer size={10*em} />
            <Text style={[commonStyles.text.defaultWhite, {textAlign: 'center'}]}>
              {_t("or")}
            </Text>
            <Spacer size={10*em} />
            <Button onPress={this.onFacebookLogin} 
              caption={_t('Continue with facebook')} 
              icon={require('~/common/assets/images/facebook.png')}
              textColor='#fff'
              bgGradientStart='#48bff3' bgGradientEnd='#00a9f2'
            />
            <Spacer size={10*em} />
            <TouchableOpacity style={{
              width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
            }} onPress={this.goLogin}>
              <Text style={[commonStyles.text.defaultWhite, {fontSize: 14*em}]}>
                {_t("Already have an account?")}
              </Text>
              <Text style={[commonStyles.text.defaultWhite, {fontSize: 14*em, fontWeight: 'bold'}]}>
                {_t('Connect yourself')}
              </Text>
            </TouchableOpacity>
            <Spacer size={60*em} />
          </View>
        </View>
      </FirstWrapper>
    )
  }

  goNext = () => {
    if (this.isInvalid()) return

    const { phoneNumber } = this.state
    this.props.signupActions.setPhoneNumber(phoneNumber)
    this.props.signupActions.sendConfirmCode(phoneNumber)
    Actions['signup_set_confirm_code']()
    // this.props.signupActions.trySignup(phoneNumber)
  }

  isInvalid = () => {
    const { phoneNumber } = this.state
    if (phoneNumber == '') return true

    return false
  }

  onFacebookLogin = () => {

  }

  goLogin = () => {
    Actions['login']()
  }

  adjustOnTextFocus = () => {
    this.setState({...this.state, adjust: {mostTop: 20*em}})
  }

  adjustOnTextBlur = () => {
    this.setState({...this.state, adjust: {mostTop: 180*em}})
  }

}
