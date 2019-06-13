<script>
    import store from '../../player.store.js'
    import Button from "./GameButton.svelte"
    
    export let winner = null

    let size = 10;
    let winningCondition = []
    let isPlayerOne = true
    let symbols = Array(9).fill("")

    $: console.log(winningCondition)

    store.subscribe(values=>{
        winningCondition = values.winningCondition
        winner = values.winner
    })

    const onClick = (index) => {
        let symbol
        if(symbols[index] === "" && !winner){
            store.playerMove(isPlayerOne, index)
            store.checkForWinner()
            symbols[index] = isPlayerOne ? "X" : "O" 
            isPlayerOne = !isPlayerOne
        }
    }

    const checkWinningCondition =(value) => {
        let result = winningCondition.findIndex((el)=>el=== value) === -1 ? false : true
        return result
    }

</script>

<style>
    .game-board{
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        background-color: rgb(85, 85, 85);
        grid-row-gap: 2px;
        grid-column-gap: 2px;
        border: 4px solid rgb(66, 66, 66);
        border-radius: 5px;
    }
    

</style>

<div class="game-board"style ={`width: ${size}rem; height: ${size}rem; `}>
    {#each symbols as symbol, index}
        <Button gameOver={!!winner} isWinner={winningCondition.includes(index)} on:click={()=>{onClick(index)}} {symbol}></Button>
    {/each}
</div>

