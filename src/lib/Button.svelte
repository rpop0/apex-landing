
<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    export let href = '#';
    export let icon = null;
    export let type = 'primary';

    let className;

    export {className as class};

</script>



<a href={href} class="{type} {className} font-semibold py-3 px-7 rounded-full text-center md:text-xl" class:bg-apex-green={type === 'primary'}>
    {#if icon}
        <Fa icon={icon} class='inline mr-3' />
    {/if}
    <slot/>
</a>

<style>

    .patreon {
        background-color: #F96854;
        color: white;
    }

    .github {
        @apply text-white bg-black;
    }

    .discord {
        background-color: #5865F2;
        color: white;
    }
</style>
