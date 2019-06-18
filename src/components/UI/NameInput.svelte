<script>
    export let playerName = ""
    let selected = false
    export let placeholder
    let error = null

    const checkInput = () => {
        playerName = playerName.trim()
        console.log("working")
        if(playerName === ""){
            error = "Must Enter Player Name"
        }
    }
</script>

<style>
   .name-input{
       margin: 3rem;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       text-align: center;
   }

    p{
        font-family: "Acme";
        font-size: 20vh;
    }

    input{
        width: 95%;
        border: none;
        border-bottom: 2px solid rgb(54, 54, 54);
        font-size: 1.5rem;
        padding: .25rem .75rem .1rem .75rem;
        outline: none;
    }

    input:focus-within{
        border-bottom: 2px solid rgb(255, 166, 0);
    }

    .error{
        background-color: rgba(255,0,0,.5);
        color: white;
    }

    .error-message{
        font-size: 1rem;
        color: red;
    }

</style>

<div class="name-input">
    <p class="name-input_title"><slot/></p>
    <input
        class:error={error}  
        on:focus={()=>{error=null}}
        on:focusout={checkInput} 
        {placeholder} class="name-input_input" 
        type="text" bind:value={playerName}
    />
</div>
    {#if error}
        <p class="error-message">{error}</p>
    {/if}