import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button =(props)=>{
  const { button, buttonText, onPress } = styles
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={button}>
        <Text style={buttonText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#34d377",
    borderRadius: 20,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  }
})

export default Button