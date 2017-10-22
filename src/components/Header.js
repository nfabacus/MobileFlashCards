import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header =({title})=>{
  const { header, headerText } = styles
  return (
    <View style={header}>
      <Text style={headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
  },
  headerText: {
    fontSize: 25,
  }
})

export default Header