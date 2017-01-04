import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

export default () => (
  <TouchableHighlight
    underlayColor='#35b5ff'
    >
    <Text style={styles.label}>Khatra facourite</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    height: 70,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'red'
  }
})