import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ButtonWide =(props)=>{
  const { container, button, buttonText } = styles
  return (
    <View style={container}>
      <TouchableOpacity onPress={props.onPress} style={[button, {backgroundColor:props.bgColor||"#34d377"}]}>
        <Text style={buttonText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  }
})

ButtonWide.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  bgColor: PropTypes.string,
}

export default ButtonWide