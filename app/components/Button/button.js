import React, { Component } from 'react';
import { 
  Text,   
  View,
  StyleSheet,  
  TouchableOpacity,
 } from 'react-native';
 import PropTypes from 'prop-types'; 

 import colors from './../../config/colors';

class Button extends Component {

  render() {
    const { loginButton, onPressAction } = this.props;
    return (
      <View style={style.mainContainer}>
        <TouchableOpacity style={[style.button, loginButton]} onPress={onPressAction}>  
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
  },
  buttonContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'stretch',
    borderWidth: 1,    
    borderRadius: 8,
    borderColor: colors.LF_GRAY,
    height: 50,    
  },
  textLabel: {
    fontSize: 16,
    color: colors.LF_GRAY,    
  },

});

export default Button;
