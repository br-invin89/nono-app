import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ProfileWrapper from '../../common/wrappers/ProfileWrapper'
import ProfileHeader from '../../common/headers/ProfileHeader'
import { W, H, em } from '~/common/constants';

export default class ScreenView extends React.Component {
  state = {
  }

  render() {
    const { _t } = this.props.appActions

    return (
      <ProfileWrapper>
        <ProfileHeader title={_t('Settings')} onPress={this.goBack} />
        {this.renderSettingTable()}
        {this.renderActionBar()}
      </ProfileWrapper>
    )
  }

  renderSettingTable() {
    const { personalInfo } = this.props.profile
    const { _t } = this.props.appActions

    return (
      <View>
        <View style={{
          marginVertical: 20
        }}>
          <Text style={{ color: '#9f9f9f', fontSize: 17}}>
            {_t('Name')}
          </Text>
          <Text style={{ color: '#36384a', fontSize: 17 }}>{personalInfo.name}</Text>
        </View>
        <View style={{
          marginVertical: 20
        }}>
          <Text style={{ color: '#9f9f9f', fontSize: 17}}>
            {_t('Telephone')}
          </Text>
          <Text style={{ color: '#36384a', fontSize: 17 }}>{personalInfo.phone}</Text>
        </View>
        <View style={{
          marginVertical: 20
        }}>
          <Text style={{ color: '#9f9f9f', fontSize: 17}}>
            {_t('Email')}
          </Text>
          <Text style={{ color: '#36384a', fontSize: 17 }}>{personalInfo.email}</Text>
        </View>
        <View style={{
          marginVertical: 20
        }}>
          <Text style={{ color: '#9f9f9f', fontSize: 17}}>
            {_t('Birth date')}
          </Text>
          <Text style={{ color: '#36384a', fontSize: 17 }}>{personalInfo.birthDate}</Text>
        </View>
        <View style={{
          marginTop: 20, marginBottom: 20
        }}>
          <TouchableOpacity style={{
            flexDirection: 'row', justifyContent: 'space-between'
          }}>
            <Text style={{ color: '#36384a', fontSize: 17}}>
              {_t('Terms of use')}
            </Text>
            <Image source={require('~/common/assets/images/png/arrow.png')} 
              style={{
                transform: [{rotate: '180deg'}], 
                tintColor: '#bfbfc4'
              }} 
            />
          </TouchableOpacity>
        </View>
        <View style={{
        }}>
          <TouchableOpacity style={{
            flexDirection: 'row', justifyContent: 'space-between'
          }}>
            <Text style={{ color: '#36384a', fontSize: 17}}>
              {_t('Privacy of policy')}
            </Text>
            <Image source={require('~/common/assets/images/png/arrow.png')} 
              style={{
                transform: [{rotate: '180deg'}], 
                tintColor: '#bfbfc4'
              }} 
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderActionBar() {
    const { _t } = this.props.appActions

    return (
      <View style={{ 
        width: W, 
        position: 'absolute', left: 0, bottom: 40, zIndex: 30,
        alignItems: 'center'        
      }}>
        <TouchableOpacity onPress={this.signout}>
          <Text style={{ color: '#fe000c', fontSize: 17 }}>
            {_t('Sign Out')}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  signout = () => {
    this.props.authActions.doLogout()
    Actions.auth()
    Actions['login']()
  }
}
