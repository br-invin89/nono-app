import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '~/root/app/store/actions'
import * as ProfileActions from '../../store/actions'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { W, H, em, colors } from '~/common/constants'
import TouchableScale from 'react-native-touchable-scale'

class Menu extends React.Component {
  render() {
    const { isShowable } = this.props
    return (
      <React.Fragment>
        { isShowable && 
        <BackWrapper onPress={this.handleClickOutside}>
          <MenuWrapper ref={this.setWrapperRef} onClose={this.props.onClose}>
            <Text style={{
              fontSize: 23, color: colors.primary, fontWeight: '600',
              marginVertical: 10
            }}>
            </Text>

          </MenuWrapper>
        </BackWrapper>
        }
      </React.Fragment>      
    )
  }
}

const menuList = [
  {
    name: 'Wallet',
    imageUrl: require('~/common/assets/images/png/free-charge-2x.png'),
    subTitle: '0,00 €',
    icon: 'payment',
    route: 'wallet'
  },
  {
    name: 'Historical',
    imageUrl: require('~/common/assets/images/png/free-charge-2x.png'),
    icon: 'history',
    route: 'history'
  },
  {
    name: 'Payment',
    imageUrl: require('~/common/assets/images/png/free-charge-2x.png'),
    icon: 'credit-card',
    route: 'payment'
  },
  {
    name: 'Settings',
    imageUrl: require('~/common/assets/images/png/free-charge-2x.png'),
    icon: 'settings',
    route: 'setting'
  },
  {
    name: 'About us',
    imageUrl: require('~/common/assets/images/png/free-charge-2x.png'),
    icon: 'details',
    route: 'about_us'
  },
  {
    name: 'Need help?',
    imageUrl: require('~/common/assets/images/png/free-charge-2x.png'),
    icon: 'help',
    route: 'help'
  },
]

const BackWrapper = (props) => {
  return (
    <View 
      style={{
        position: 'absolute', zIndex: 80, 
        left: 0, top: 0, width: W, height: H,
        backgroundColor: 'rgba(0, 0, 0, 0.44)'
      }}
    >
      {props.children}
    </View>
  )
}

const MenuWrapper = (props) => {
  return (
    <View 
      style={{
        position: 'absolute', zIndex: 90,
        left: 0, top: 0, width: 325, height: H,
        backgroundColor: '#fff',
        borderTopRightRadius: 20, borderBottomRightRadius: 20,
        paddingTop: 50, paddingBottom: 20, paddingHorizontal: 20,
      }}
    >
      <View style={{marginVertical: 10}}>
        <TouchableOpacity onPressIn={props.onClose}>
          <Image source={require('~/common/assets/images/png/cross.png')}
            style={{width: 15, height: 15}} />
        </TouchableOpacity>
      </View>
      {props.children}
    </View>
  )
}

const mapStateToProps = state => ({
  app: state.app || {},
  profile: state.profile || {}
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
  profileActions: bindActionCreators(ProfileActions, dispatch)
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)
(Menu)
