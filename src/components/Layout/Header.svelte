<script>
    import Menu from './HeaderMenu.svelte'
</script>

<style>
    header{
        color: white;
        background-color:rgb(54, 54, 54);
        display: flex;
        padding: 1rem;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
        box-shadow: 0px 2px 4px black;
    }

    h1{
        font-family: 'Acme', sans-serif;
        font-size: 4rem;
        padding: 0px;
        margin: 0px auto;
        text-shadow: 0px 2px 4px black;
    }
</style>

<header>
    <img src="" alt="LOGO">
    <h1><slot></slot></h1>
    <Menu />
</header>