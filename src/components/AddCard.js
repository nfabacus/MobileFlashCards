import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from './Button'
import { addCard } from '../actions'

class AddCard extends Component {
  state={
    qestion: "",
    answer: ""
  }

  submitCard=()=>{
    console.log("question:", this.state.question)
    console.log("answer:", this.state.answer)
    const {deckTitle} = this.props.navigation.state.params
    const submittedQ = this.state.question
    const submittedA= this.state.answer
    console.log("decktile submitted", deckTitle)
    if(submittedQ !==undefined&&submittedQ.trim()!==""&&submittedA !==undefined&&submittedA.trim()!=="") {
      const cardObj = {[submittedQ]:submittedA}
      this.props.addCard(deckTitle, cardObj)
      this.setState({
        question: "",
        answer: ""
      })
      this.props.navigation.navigate(
        'DeckDetail',
        {deckTitle}
      )
    }
  }

  render (){
    const {deckTitle} = this.props.navigation.state.params
    const { container, cardInput, textTitle } = styles
    return (
      <View style={container}>
        <Text style={textTitle}>Question</Text>
        <TextInput
          style={cardInput}
          onChangeText={(text)=>{this.setState({question: text})}}
          value={this.state.question}
        />
        <Text style={textTitle}>Answer</Text>
        <TextInput
          style={cardInput}
          onChangeText={(text)=>{this.setState({answer: text})}}
          value={this.state.answer}
        />
        <Button
          onPress={()=>{this.submitCard()}}
          text="Submit"
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
  cardInput: {
    width: 300,
    height: 50,
  },
  textTitle: {
    fontSize: 20,
  }
})

export default connect(null, {addCard})(AddCard)