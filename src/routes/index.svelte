<script>
	import Header from '../components/Layout/Header.svelte'
	import GameArea from '../components/Game/GameArea.svelte'
	export let name;

</script>

<style>

</style>

<svelte:head>
	<title>Svelte Tac-Toe!</title>
</svelte:head>

<Header><p slot="header-text">Title</p></Header>
<main>
	<GameArea />
</main>