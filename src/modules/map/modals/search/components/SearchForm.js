import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'

export default class SearchForm extends React.Component {
  state = {
    searchVal: ''
  }

  render() {
    const { _t } = this.props.appActions
    const { places } = this.props.map

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ 
          flexDirection: 'row',
          backgroundColor: '#fafafa',
          borderRadius: 15,
          height: 50, alignItems: 'center'
        }}>
          <Image source={require('~/common/assets/images/png/search.png')}
            style={{ marginHorizontal: 15 }}
          />
          <TextInput
            style={{ width: 210, fontSize: 17 }}
            placeholder={_t('Search')}
            value={this.state.searchVal}
            onChangeText={searchVal => this.setState({...this.state, searchVal})}
            onSubmitEditing={(searchVal) => {
              console.log('qw=w=w=w')
              this.props.mapActions.searchPlaces(searchVal)}
            }
          />
        </View>
        <View>
          <TouchableOpacity style={{
            backgroundColor: '#fff'            ,
            paddingVertical: 5, paddingHorizontal: 10,
            height: 50, justifyContent: 'center'
          }} onPressIn={this.props.onCancel}>
            <Text style={{
              color: places.length>0?'#35cdfa':'#bfbfc4', fontSize: 17
            }}>
              {_t('Cancel')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
