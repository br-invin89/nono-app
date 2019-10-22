import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar, Platform, AppRegistry } from 'react-native';
import { Root } from 'native-base'
import RootRoutes from '~/root/routes';
import {name as appName} from '../../../../app.json';

export default class AppView extends Component {
  state = {};

  componentWillMount() {
    this.props.appActions.setLanguage('fr');
  }

  render() {
    return (
      <View style={styles.safeArea}>
        <View style={styles.container}>
          <Root>
            <RootRoutes />
          </Root>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  }  
})
