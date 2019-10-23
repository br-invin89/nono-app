import React from 'react'
import { View, ScrollView, Image, Text } from 'react-native'
import { W, H, em } from '~/common/constants'
import { Spacer } from '~/common/components'
import QRScanner from './components/QRScanner'
import { Actions } from 'react-native-router-flux'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export default class ScreenView extends React.Component {
  state = {
    qrCode: '',
    scanBarAnimateReverse: true
  }

  render() {
    const { _t } = this.props.appActions
    return (
      <View>
        <QRScanner
          onScanResult={ this.onReceivedQRCode }
          renderHeaderView={ this.renderTitleBar }
          renderFooterView={ this.renderBottom }
          scanBarAnimateReverse={ true }
          hintText={
            `${_t('QR code not detected?')} ${_t('Enter the number of the station')}`
          }
        />
      </View>
    )
  }

  onReceivedQRCode = (event) => {
    this.setState({
      qrCode: event.data,
      scanBarAnimateReverse: false
    }, () => {
      // Actions['map_']
    })
  }

  renderTitleBar = () => {
    const { _t } = this.props.appActions;
    const { qrCode } = this.state;
    return qrCode ? (
      <Text style={{color:'white',textAlign:'center',padding:16}}>
        {qrCode}
      </Text>
    ) :(
      <View>
        <Text style={{color:'white',textAlign:'center',padding:16}}>
          {_t('Last step')}
        </Text>
        <Spacer size={30}/>
        <Text style={{color:'white',textAlign:'center',padding:16}}>
          {_t('Enter the number under the QR Code')}
        </Text>
      </View>
    );
  }

  renderBottom = () => {
    return (
      <View style={{
        flex: 1, flexDirection: 'column'
      }}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity style={{
            flex: 1,
            width: 40, height: 40,
            backgroundColor: '#9b9b9b',
            borderRadius: 15, marginRight: 15,
            alignItems: 'center', justifyContent: 'center'
          }}>
            <Image 
              style={{ height: 20, tintColor: 'white' }} 
              source={require('~/common/assets/images/png/flash-QR-code.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <Spacer size={15}/>
        <View style={{
          flex: 1, flexDirection: 'row'
        }}>
          <TouchableOpacity style={{
            flex: 1, alignItems: 'flex-start'
          }} onPress={() => this.onClickClose()}>
            <MaterialIcon name="close" style={{
              width: 40, height: 40,
              borderRadius: 15, alignItems: 'center', justifyContent: 'center',
              fontSize: 20, marginLeft: 15, 
              paddingTop: 10, paddingLeft: 10,
              backgroundColor: '#9b9b9b'
            }} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 1, alignItems: 'flex-start'
          }} onPress={() => Actions['map_enter_code']()}>
            <Text style={{
              color: 'white', width: 40, height: 40,
              backgroundColor: '#9b9b9b',
              paddingLeft: 12, paddingTop: 13,
              borderRadius: 15,
              fontSize: 10, marginRight: 15
            }}>123</Text>
          </TouchableOpacity>
        </View>
        <Spacer size={30}/>
      </View>
    )
  }

  onClickClose = () => {
    Actions['map_first']()
  }
}
