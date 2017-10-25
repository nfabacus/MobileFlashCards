import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SingleDeckSummary = (props)=>{
  const { deckContainer, title, cardDetail } = styles
  console.log("props in SingleDeckSummary>>>>>>", props)
  return (
    <TouchableOpacity
      style={deckContainer}
      onPress={props.onPress}
    >
      <Text style={title}>{props.deckTitle}</Text>
      <Text style={cardDetail}>{props.numOfCards} cards</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deckContainer: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#c5eafd",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  title: {
    fontSize: 25,
  },
  cardDetail: {
    fontSize: 20,
  }
})

export default SingleDeckSummary