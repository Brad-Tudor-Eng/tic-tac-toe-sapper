<script>
    import NameInput from './NameInput.svelte'
    let playerOneName = ""
    let playerTwoName = ""
</script>

<style>
</style>

<!-- 
    simple landing area which will show a title
    2 labels one for each player
    2 user input text areas one for each players name
    1 submit button which will set the users name
 -->

 <h1>Tic-Tac-Toe</h1>
 <div class="input-form">
    <NameInput bind:playerName={playerOneName}>X's</NameInput>
    <p>VS</p>
    <NameInput bind:playerName={playerTwoName}>O's</NameInput>
 </div>
 <button>Game On!</button>