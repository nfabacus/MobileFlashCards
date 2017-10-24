import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from './Button'
import ButtonWide from './ButtonWide'

class QuizView extends Component {

  state={
    showAnswer: false,
    quizPos: 0,
    score: 0
  }

  toggleShowAnswer=()=>{
    this.setState({
      showAnswer:!this.state.showAnswer
    })
  }

  addScore =(point)=>{
    this.setState({
      score: this.state.score+point,
      showAnswer: false,
      quizPos: this.state.quizPos+1,
    })
  }

  render (){
    const {deckTitle} = this.props.navigation.state.params
    const { container, titleText, subTitleText, answerText, spacer} = styles
    let numOfCards
    const currentDeck = this.props.decks[deckTitle]
    if(currentDeck){
      numOfCards = Object.keys(currentDeck).length
    } else {
      numOfCards = 0
    }
    if(numOfCards>0){
      const questionsArr = Object.keys(currentDeck)
      const {quizPos, showAnswer, score} = this.state
      console.log("data>>>>>>>",quizPos, showAnswer, score)
      if(quizPos<numOfCards) {
        return (
          <View style={container}>
            <Text>{quizPos+1}/{numOfCards}</Text>
            <Text style={titleText}>{!showAnswer?questionsArr[quizPos]:currentDeck[questionsArr[quizPos]]}</Text>
            <TouchableOpacity onPress={this.toggleShowAnswer}>
              <Text style={answerText}>{!showAnswer?"Answer":"Question"}</Text>
            </TouchableOpacity>
            
            <View style={spacer}></View>
            
            <Button
              text="Correct"
              onPress={()=>{this.addScore(1)}}
            />
            <Button
              text="incorrect"
              bgColor="red"
              onPress={()=>{this.addScore(0)}}
            />
          </View>
        )
      } else {
        return (
          <View style={container}>
            <Text style={subTitleText}>
              You finished your quiz.
            </Text>
            <Text style={titleText}>
              Your score: {Math.round((score/numOfCards)*100)} %
            </Text>
            <ButtonWide
              text="Back to Deck"
              onPress={()=>this.props.navigation.navigate(
                'DeckDetail',
                {deckTitle}
              )}
            />
          </View>
        )
      }
      
    } else {
      return (
        <View style={container}>
          <Text style={subTitleText}>
            There is no card in the deck...
          </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    marginTop: 50,
  },
  subTitleText: {
    fontSize: 20,
  },
  answerText: {
    fontSize: 20,
    color: "red",
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

export default connect(mapStateToProps,{})(QuizView)