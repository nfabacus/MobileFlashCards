import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SingleDeckSummary = ({deckTitle, numOfCards})=>{
  const { deckContainer, title, cardDetail } = styles
  return (
    <View style={deckContainer}>
      <Text style={title}>{deckTitle}</Text>
      <Text style={cardDetail}>{numOfCards} cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deckContainer: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
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