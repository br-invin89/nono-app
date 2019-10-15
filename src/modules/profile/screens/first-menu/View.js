import React from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class ScreenView extends React.Component {
  state = {
  }

  render() {
    return (
      <View>
        <View style={{marginTop: 200}}>
          <TouchableOpacity onPress={this.onLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  onLogout = () => {
    this.props.authActions.doLogout()
    Actions['login']()
  }

}
