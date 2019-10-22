import React from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ProfileWrapper from '../../common/wrappers/ProfileWrapper'
import ProfileHeader from '../../common/headers/ProfileHeader'
import PayBox from './components/PayBoxContainer'
import AddCouponBox from './components/AddCouponBoxContainer'
import CouponBox from './components/CouponBoxContainer'
import PayActionBar from './components/PayActionBarContainer'
import { Spacer } from '~/common/components'

export default class ScreenView extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    const { _t } = this.props.appActions
    const { cash } = this.props.profile

    return (
      <ProfileWrapper>
        <ProfileHeader title={_t('Wallet')} onPress={this.goMap} onPressOption={this.goMap}/>

        <Text style={{ marginVertical: 10, fontSize: 14, color: '#36394a'}}>
          {_t('Charge your account for benefits')}
        </Text>

        <PayBox />
        <Spacer size={10} />
        {!cash.couponCodeActived ?
        <AddCouponBox />
        :
        <CouponBox />
        }
        <PayActionBar />
      </ProfileWrapper>
    )
  }

  goMap = () => {
    Actions.map()
    Actions['map_first']()
  }
}
