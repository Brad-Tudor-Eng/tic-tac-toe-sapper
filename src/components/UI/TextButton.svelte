<script>
    export let href
    export let styleClass = "white";
</script>

<style>
    .dark{
        background-color: rgb(54, 54, 54);
        border: 1px solid white;
        border-radius: .25rem;
        color: white;
    }

    .dark:hover{
        background-color: rgb(238, 238, 238);
        color: black;
    }

    .light{
        background-color: rgb(238, 238, 238);
        border: 1px solid black;
        border-radius: .25rem;
        color: black;
    }

    .light:hover{
        background-color: rgb(54, 54, 54);
        border: 1px solid black;
        color: rgb(238, 238, 238);
    }

    a{
        margin: .5rem .5rem;
        padding: .25rem;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        word-wrap: unset;
        font-size: 1.25rem;
        cursor: pointer;
        transition: all .2s;
    }

    .mega{
        font-size: 2rem;
        border-width: 3px;
        border-radius: .5rem;
        padding: .5rem 2rem;
        word-wrap: break-word;        
    }

</style>

<a class={styleClass} {href}><slot></slot></a>