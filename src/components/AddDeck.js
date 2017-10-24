import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native'

import Header from './Header'
import Button from './Button'
import { addDeck } from '../actions'

class AddDeck extends Component {
    state={
      text:""
    }

    handleTextChange=(text)=>{
      this.setState({
        text: text
      })
    }

    onTextSubmit=()=>{
      console.log("Text submitted!!:", this.state.text)
      const submittedText = this.state.text.trim()
      if(submittedText !=="") {
        this.props.addDeck(submittedText)
        this.setState({
          text:""
        })
        this.props.navigation.navigate('Decks')
      }
    }

    render(){
      const { addDeckContainer, mainTitle, deckInput } = styles
      return (
        <View>
          <Header title="Add A Deck" />
          <View style={addDeckContainer}>
            <Text style={mainTitle}>What is the title of your new deck?</Text>
            <TextInput 
              style={deckInput}
              onChangeText={(text)=>this.handleTextChange(text)}
              value={this.state.text}
            />
            <Button onPress={this.onTextSubmit} text="Add" />
          </View>
          
        </View>
      )
    }
}

const styles = StyleSheet.create({
  addDeckContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  mainTitle: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  deckInput: {
    width: 300,
    height: 50,
  }
})

export default connect(null, {addDeck})(AddDeck)