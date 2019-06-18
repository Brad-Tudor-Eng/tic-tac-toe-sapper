<script>
	import Header from '../components/Layout/Header.svelte'	
</script>

<style>
	:global(*),
	:global(*::after),
	:global(*::before){
		margin: 0;
		padding: 0;
	}

	:global(root){
		font-family: 'Lato', sans-serif;
        font-weight: 400;
		font-size: 10px;
	}

	:global(body){
		background-color: rgb(248, 248, 248);
		width: 100vw;
	}

	main{
		display: flex;
		justify-content: center;
	}

	
</style>

<Header>Tic-Tac-Toe!</Header>
<main>
	<slot></slot>
</main>