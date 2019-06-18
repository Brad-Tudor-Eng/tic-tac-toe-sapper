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
    playerOne: {name: "", squares: []},
    playerTwo: {name: "", squares: []}, //the player and their moves
    moves: [], // tracks all moves made in current game
    history: [], //collections of games {winner, moves}
    winner: null, //who has won the game
    winningCondition: [] //the winning combination
})




export default {
    subscribe: store.subscribe,
}