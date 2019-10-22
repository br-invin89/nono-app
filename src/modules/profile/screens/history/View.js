import React from 'react'
import { ScrollView, Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ProfileWrapper from '../../common/wrappers/ProfileWrapper'
import ProfileHeader from '../../common/headers/ProfileHeader'
import { W, H, em } from '~/common/constants';
import HistoryListItem from './components/HistoryListItem';

export default class ScreenView extends React.Component {
  componentDidMount() {
    this.props.profileActions.loadHistories();    
  }

  render() {
    const { _t } = this.props.appActions;
    const { histories } = this.props.profile;
    return (
      <ProfileWrapper>
        <ProfileHeader title={_t('History')} onPress={this.goSummary} />
        <ScrollView style={{height: Platform.OS=='ios'?H-60:H-40}}>
          {histories.map((history, k) => (
            <HistoryListItem history={history} key={k} />
          ))}
        </ScrollView>
      </ProfileWrapper>
    )
  }

  goSummary = () => {
    Actions['summary']()
  }
}
