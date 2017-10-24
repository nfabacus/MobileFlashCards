import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import ButtonWide from './ButtonWide'

class DeckDetail extends Component {
  render (){
    const {deckTitle} = this.props.navigation.state.params
    const { container, titleText, cardNumText, spacer} = styles
    let numOfCards
    if(this.props.decks[deckTitle]){
      numOfCards = Object.keys(this.props.decks[deckTitle]).length
    } else {
      numOfCards = ""
    }
    return (
      <View style={container}>
        <ButtonWide
          onPress={()=>{this.props.navigation.navigate('Decks')}}
          text="Back to Decks List"
          bgColor="blue"
        />
        <View style={spacer}></View>
        <Text style={titleText}>{deckTitle}</Text>
        <Text style={cardNumText}>{numOfCards} cards</Text>
        <Button
          onPress={()=>this.props.navigation.navigate(
            'AddCard',
            {deckTitle}
            )}
          text="Add Card"
          bgColor="purple"
        />
        <Button
          text="Start Quiz"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25
  },
  cardNumText: {
    fontSize: 20,
  },
  spacer: {
    marginBottom: 50
  }
})

function mapStateToProps(state) {
  if(state&&state.decks) {
    console.log("state.decks arrived in component>>>>", state.decks)
    return {
      decks: state.decks
    }
  }
}

export default connect(mapStateToProps,{})(DeckDetail)