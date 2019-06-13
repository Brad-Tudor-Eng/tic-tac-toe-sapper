import {writable } from 'svelte/store'
import uuid from 'uuid/v4'
import {includesAll} from './helper/includesAll'


const INITIAL_STATE = {
    playerOne: {name: "", score: []},
    playerTwo: {name: "", score: []},
    moves: [],
    history: [],
    winner: null,
    winningCondition: []
}

const winningConditions = [
    //rows
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonals
    [0,4,8],
    [6,4,2]
]

const store = writable({
    playerOne: {name: "", score: []},
    playerTwo: {name: "", score: []},
    moves: [],
    history: [],
    winner: null,
    winningCondition: []
})

const playerMove = (isPlayerOne, move) => {
    //adds a move to the specified player
    store.update((storeValues)=>{
        let {playerOne, playerTwo, moves} = storeValues

        if(isPlayerOne){
            playerOne.score = [...playerOne.score, move]
        }else{
            playerTwo.score = [...playerTwo.score, move]
        }

        moves = [...moves, move]

        return {...storeValues, playerOne, playerTwo, moves}
    })
}

const checkForWinner = () => {
    //sets the game over condition
    store.update(storeValues=>{
        let {playerOne, playerTwo, winner, winningCondition, history, moves} = storeValues
        for(let condition of winningConditions){
            if(includesAll(playerOne.score, condition)){ winner = "playerOne" }
            if(includesAll(playerTwo.score, condition)){ winner = "playerTwo" }
            if(winner){ 
                winningCondition = [...condition] 
                const newHistoryItem = {id: uuid(), winner, moves:[...moves]}
                history = [...history, newHistoryItem]
                return {...storeValues, winner, winningCondition}
            }
        }
        return {...storeValues}
    })
}

const reset = () => {
        console.log("reset")
    store.update(values=>{
        const history = values.history
        console.log(history)
        return {...INITIAL_STATE, history}
    })
}

const clearHistory = () => {
    store.update(values=>{
        return {...values, history:[]}
    })
}

//TODO: add check for cat feature

export default {
    subscribe: store.subscribe,
    playerMove,
    checkForWinner,
    clearHistory,
    reset
}