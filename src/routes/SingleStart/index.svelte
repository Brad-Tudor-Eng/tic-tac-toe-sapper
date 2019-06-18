<script>
    import TextButton from '../../components/UI/TextButton.svelte'
    import NameInput from '../../components/UI/NameInput.svelte'
    let playerOneName = ""
    let playerTwoName = ""
</script>

<style>

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.inputs{
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
}

p{
    margin: auto;
}


</style>

<!-- 
    simple landing area which will show a title
    2 labels one for each player
    2 user input text areas one for each players name
    1 submit button which will set the users name
 -->
<form on:submit={e => e.preventDefault()}>
    <div class="inputs">
        <div class="playerX">
            <NameInput placeholder="Player One" bind:playerName={playerOneName}>X's</NameInput>
        </div>
        <p>VS</p>
        <div class="playerY">
            <NameInput placeholder="Player Two" bind:playerName={playerTwoName}>O's</NameInput>
        </div> 
    </div>
    <TextButton styleClass="light" href="/SingleGame">Game On!</TextButton>
</form>
