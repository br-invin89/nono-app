import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { W, H, em } from '~/common/constants';
import { Button } from '~/common/components';
import ProfileWrapper from '../../common/wrappers/ProfileWrapper'
import ProfileHeader from '../../common/headers/ProfileHeader'
import { Actions } from 'react-native-router-flux';
import PayActionBar from '../wallet/components/PayActionBarContainer'

export default class ScreenView extends React.Component {
  state = {
    adjust: {
      bottomPos: 60
    }
  }

  render = () => {
    const { _t } = this.props.appActions;

    return (
      <ProfileWrapper>
        <ProfileHeader title={_t('Add a promo code')} onPress={this.goWallet} />
        <View>
          <Text>Pay page</Text>
        </View>
        <PayActionBar />
      </ProfileWrapper>
    )
  }

  goWallet = () => {
    Actions['profile_wallet']()
  }

  addCoupon = () => {
    this.props.profileActions.addCoupon()
  }
}