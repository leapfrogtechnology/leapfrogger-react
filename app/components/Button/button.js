import React, { Component } from 'react';
import { 
  Text,   
  View,
  StyleSheet,  
  TouchableOpacity,
 } from 'react-native';
 import PropTypes from 'prop-types'; 

 import colors from 'App/config/colors';

class Button extends Component {

  render() {
    const { loginButton, onPress } = this.props;
    return (
      <View style={style.mainContainer}>
        <TouchableOpacity style={[style.button, loginButton]} onPress={onPress}>  
          <View style={ [style.buttonContainer] }>
            <Text style={style.textLabel}>{ this.props.title }</Text>    
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

Button.defaultProps = {
  title: 'Button',
  onPress: () => { }
};

Button.propTypes = {
  title: PropTypes.string,  
  onPress: PropTypes.func
};

const style = StyleSheet.create({

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    borderWidth: 1,    
    borderRadius: 5,
    borderColor: colors.LF_GRAY,
    height: 44,
    width: 240,
    // backgroundColor: colors.LF_LIGHT_GREEN,    
  },
  textLabel: {
    fontSize: 16,
    color: colors.LF_GRAY,    
  },

});

export default Button;
