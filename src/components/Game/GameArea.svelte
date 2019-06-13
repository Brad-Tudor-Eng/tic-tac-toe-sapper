<script>
    import store from '../../player.store.js'
    import GameHistory from './GameHistory.svelte'
    import GameBoard from './GameBoard.svelte'

    const onReplay = ({detail}) => {
        console.log(detail)
    }

</script>

<style>
</style>

<section class="game-area">
    
    <GameBoard  />
    <GameHistory on:replay={onReplay} />
    <button on:click={store.reset()}>Reset</button>
</section>