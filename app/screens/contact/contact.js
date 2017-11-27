import React, { Component } from 'react';
import { 
  View,
  Text,
  SectionList
 } from 'react-native';
import style from './styles';

import ContactCell from './contactCell';

 class ContactScreen extends Component {

  render() {
    return (
      <View style={ style.mainContainer }>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <ContactCell/>}
          renderSectionHeader={({section}) => <Text style={style.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }

 }

 export default ContactScreen
