import React, { Component } from 'react';
import { 
  View,
  Text,
  SectionList
 } from 'react-native';
import Search from 'react-native-search-box';
 
import style from './styles';
import colors from 'App/config/colors';
import ContactCell from './contactCell';
import screens from 'App/constants/screens';

 class ContactScreen extends Component {

  constructor(props) {
    super(props);
  }

  _onSearchBarTextChange = () => {
    console.log('bigno');
  }

  _onSearchBarFocus = () => {
    console.log('focus');    
  }

  _onSearch = () => {
    console.log('search');        
  }

  _onSearchCancel = () => {
    console.log('cancel');
  }

  _onCellSelection = () => {
    console.log('xcxcxcx', this.props.navigator);
    this.props.navigator.push({
      screen: screens.CONTACT_DETAIL_SCREEN.id,
      animated: true,
      overrideBackPress: true,
    });
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        <Search
          ref={component => this.searchBar = component}
          backgroundColor={colors.LIGHT_GRAY}
          titleCancelColor={colors.SYSTEM_BLUE}
          onChangeText={this._onSearchBarTextChange}
          onFocus={this._onSearchBarFocus}
          afterSearch={this.onSearch}
          afterCancel={this.onCancel}
          keyboardDismissOnSubmit={true}
          blurOnSubmit={true}
        />
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          keyExtractor={(item, index) => index}
          renderItem={({item, section, index}) => <ContactCell index={index} section={section} data={item} onPress={this._onCellSelection}/>}
          renderSectionHeader={({section}) => <Text style={style.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }

 }

 export default ContactScreen;
