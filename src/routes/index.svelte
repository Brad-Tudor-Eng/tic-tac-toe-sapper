<script>
	import GameSelector from '../components/Layout/GameSelector.svelte'
</script>

<style>

	div{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

	p{
		font-family: Acme;
		font-size: 20vh;
		color: black;
	}
</style>

<svelte:head>
	<title>Svelte Tac-Toe!</title>
</svelte:head>


<div>
	<GameSelector href="/SingleStart">Single</GameSelector>
	    <p>OR</p>
	<GameSelector href="/NetworkStart">Network</GameSelector>
</div>
