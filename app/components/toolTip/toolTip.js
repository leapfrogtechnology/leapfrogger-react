import React, { Component } from 'react';
import { 
  Text,   
  View,
  StyleSheet,  
  TouchableOpacity,
  Image,
 } from 'react-native';
 import PropTypes from 'prop-types'; 

 import colors from 'App/config/colors';

class ToolTip extends Component {

  render() {
    return (
      <View style={[style.mainContainer]}>
        <TouchableOpacity style={[style.button, {backgroundColor: this.props.bgColor}]} onPress={this.props.onPress()}>
          <Text style={[style.textLabel]}>{ this.props.title }</Text>
        </TouchableOpacity>
        <View style={[style.pointerBottom, {borderTopColor: this.props.bgColor}]}>

        </View>
      </View>
    );
  }

}

ToolTip.defaultProps = {
  title: '',
  onPress: () => { }
};

ToolTip.propTypes = {
  title: PropTypes.string,  
  onPress: PropTypes.func,
};

const style = StyleSheet.create({

  mainContainer: {
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointerBottom: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  textLabel: {
    fontSize: 12,
    color: 'white',    
  },

});

export default ToolTip;
