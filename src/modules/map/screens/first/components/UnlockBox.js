import React from 'react'
import BoxWrapper from '../../../common/wrappers/BoxWrapper'
import { View } from 'react-native'
import { Button } from '~/common/components'
import { colors, W } from '~/common/constants'

export default class UnlockBox extends React.Component {
  render() {
    const { _t, onPress } = this.props

    return (
      <BoxWrapper>
        <Button
          bgColor={colors.primaryBackground}
          textColor={'#fff'}
          icon={require('~/common/assets/images/png/qr-code.png')}  iconColor={'#fff'}
          caption={_t('Unlocks a nono')}
          onPress={onPress}
        />
      </BoxWrapper>
    )
  }
}
