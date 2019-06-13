<script>
    export let symbol
    export let isWinner
    export let gameOver
</script>

<style>

    .game-button{
        width: 100%;
        height: 100%;
        background-color: rgb(127,127,127);
        transition: all .3s;
        font-weight: bolder;
        font-family: sans-serif;
        font-size: 1.5rem;
        padding: 0;
    }
    .playerOne{
        background-color: rgb(255, 255, 255);
        color: black;
    }
    .playerTwo{
        background-color: rgb(0, 0, 0);
        color: white;
    }
    .winner{
        background-color: greenyellow;
    }

</style>

<button 
    disabled={gameOver} 
    class:playerOne={symbol === "X"}
    class:playerTwo={symbol === "O"}  
    class:winner={isWinner}  
    on:click class="game-button" >{symbol}</button>
