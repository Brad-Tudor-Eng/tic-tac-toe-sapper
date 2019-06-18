<script>
    import TextButton from '../UI/TextButton.svelte'
    export let isLoggedIn = false
</script>

<style>
    nav{
        min-width: 15rem;
    }
</style>

<nav>
    {#if isLoggedIn}
        <TextButton styleClass="dark" href="#">Logout</TextButton>
    {:else}
        <TextButton styleClass="dark" href="#">Login</TextButton>
        <TextButton styleClass="dark" href="#">Sign-Up</TextButton>
    {/if}
</nav>

