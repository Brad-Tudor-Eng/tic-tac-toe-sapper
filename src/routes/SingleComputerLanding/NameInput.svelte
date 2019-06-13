<script>
    let playerName
</script>

<sytle>
</sytle>

<div class="name-input">
    <p class="name-input_title"><slot/></p>
    <input class="name-input_input" type="text" bind:value={playerName}/>
</div>