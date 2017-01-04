import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class NavBar extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    onLeftPress: React.PropTypes.func,
    showDrawer: React.PropTypes.bool
  }

  render() {
    const {title, onLeftPress, showDrawer} = this.props
    return (
      <Icon.ToolbarAndroid
        navIconName={showDrawer ? 'md-menu' : 'md-arrow-back'}
        onIconClicked={onLeftPress}
        style={styles.toolbar}
        titleColor={'white'}
        title={title}
      />
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#4CAF50',
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width
  }
})

