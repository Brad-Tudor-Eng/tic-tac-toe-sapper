<script>
    import TextButton from '../UI/TextButton.svelte'
    export let href
    export let image = ""
</script>

<style>
    section{
        margin: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img{
        height: 30vh;
        width: 30vh;
        background-color: black;
    }
</style>

<section>
    <img src="{image}" alt="Game Logo">
    <TextButton styleClass="light mega" {href}><slot></slot></TextButton>
</section>