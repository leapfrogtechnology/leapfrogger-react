import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList
 } from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
 
import { getWidth, getHeight } from 'App/utils/dimension';
import style, { AVATAR_SIZE, STICKY_HEADER_HEIGHT, DOT_MARGIN, PARALLAX_HEADER_HEIGHT } from './styles';
 
 class ContactDetailScreen extends Component {

  constructor(props) {
    super(props);
  }

  _renderParallaxTableHeaderView = (data) => {
    return (
      <ParallaxScrollView
        onScroll={this.props.onScroll}
        bounce={true}
        headerBackgroundColor="#333"
        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image source={{uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg'}} style={style.tableHeaderBackgroundImage}/>
            <View style={style.tableHeaderBackgroundOverlay}/>
          </View>
        )}

        renderForeground={() => (
          <View key="parallax-header" style={ style.parallaxHeader }>
            <Image style={ style.avatar } source={{uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg'}}/>
            <Text style={ style.sectionSpeakerText }>
              { this.props.data.department.name }
            </Text>
            <Text style={ style.sectionTitleText }>
              { this.props.data.department.name }
            </Text>
          </View>
        )}

        renderStickyHeader={() => (
          <View key="sticky-header" style={style.stickySection}>
            <Text style={style.stickySectionText}>iOS</Text>
          </View>
        )}
      />
    );
  }

  _renderItem = () => {
    return (
      <View>
        <Text>hello</Text>
      </View>
    )
  }

  _renderTableView = () => {
    return (
      <FlatList
        ref="ListView"
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item, section, index}) => this._renderItem() }
        renderScrollComponent={props => (
          this._renderParallaxTableHeaderView(props)
        )}
      />
    );
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        {
          this._renderTableView()
        }
      </View>
    );
  }

 }

 export default ContactDetailScreen
