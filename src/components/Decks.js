import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from './Header'
import SingleDeckSummary from './SingleDeckSummary'
import { receiveDecks, resetDecks } from '../actions'
import Button from './Button'

class Decks extends Component {
    componentDidMount () {
      this.props.receiveDecks()
    }

    render(){
      if(this.props.decks){
        console.log("this.pros in Decks!>>>>", this.props)
        const deckTitlesArr = Object.keys(this.props.decks)
        console.log("deckTitlesArr!>>>>", deckTitlesArr)
        return (
          <View style={{flex:1}}>
            <Header title="Decks" />
            <View style={styles.btnContainer}>
              <Button
                onPress={()=>this.props.resetDecks()} 
                text="Clear all"
                bgColor="red"
              />
            </View>
            
            <ScrollView>
              {
                deckTitlesArr.map((deckTitle, index)=>{
                  const questionsArr = Object.keys(this.props.decks[deckTitle])
                  const numOfCards = questionsArr.length
  
                  return (
                    <SingleDeckSummary
                      key={index}
                      deckTitle={deckTitle}
                      numOfCards={numOfCards}
                      onPress={()=>this.props.navigation.navigate(
                        'DeckDetail',
                        {deckTitle}
                        )
                      }
                    />
                  )
                })
              }
            </ScrollView>
          </View>
        )
      } else {
        return (
          <View>
            <Text>No deck</Text>
          </View>
        )
      }
    }
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
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


export default connect(mapStateToProps, {receiveDecks, resetDecks})(Decks)