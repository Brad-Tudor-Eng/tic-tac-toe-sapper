<script>
    import { onDestroy, createEventDispatcher } from 'svelte'
    import store from '../../player.store.js'
    
    let history
    
    const unsubscribe = store.subscribe(values=>{
        history = values.history
        console.log(history)
    })

    const dispatch = createEventDispatcher()

    onDestroy(()=>{
        unsubscribe()
    })
</script>

<style>
    .history{
        display: flex;
        flex-direction: column;
    }
    .history-header{
        display: flex;
        justify-content: space-around;
    }
    .history-item{
        display: flex;
        justify-content: space-around;
    }
</style>

<aside class="history">
    <header class="history-header">
        <p>Winner</p> 
        <p>Number of Moves</p>
        <p>Replay Game!</p>
    <header>
    <div class="history-body">
        {#each history as item (item.id) }
            <div class="history-item">
                <p>item.winner</p>
                <p>item.moves.length</p>
                <button on:click={()=>{dispatch('replay', {id: item.id})}}> > </button>
            </div>
        {/each}
    </div>
</aside>