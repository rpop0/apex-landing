<script>
    import application from '$lib/assets/images/application.png';
    import Fa from 'svelte-fa/src/fa.svelte';
    import Button from "$lib/Button.svelte";
    import {faGithub} from '@fortawesome/free-brands-svg-icons';
    import {faDownload} from '@fortawesome/free-solid-svg-icons';
</script>


<div class="container px-5 md:px-0 md:mx-auto mt-20">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div class="md:mb-0 mb-10">
            <img class="shadow-xl our-core-img" src="{application}">
        </div>
        <div class="relative text-right">
            <h1 class="font-soulmaze text-2xl md:text-4xl ">Our Core</h1>
            <h1 class="text-4xl md:text-6xl font-soulmaze-outline absolute -right-5 -top-1.5 md:-top-2.5  opacity-40">Our Core</h1>
            <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet, Apex Express consectetur adipiscing elit. Mauris lobortis cursus libero a scelerisque. In consequat tristique sapien sed rutrum. Curabitur eu magna ante. Morbi accumsan leo quis lectus vulputate, et dapibus mi rutrum. Integer bibendum gravida purus, in tristique purus dignissim eget. Quisque facilisis tortor velit.
                <br><br><br>
                In consequat tristique sapien sed rutrum. Curabitur eu magna ante. Morbi accumsan leo quis lectus vulputate, et dapibus mi rutrum. Integer bibendum gravida purus, in tristique purus dignissim eget. Quisque facilisis tortor velit. </p>
            <div class="flex flex-row justify-end mt-8 gap-5">
                <Button icon={faDownload}>Descarcă Aplicația</Button>
                <Button type="github" icon={faGithub}>GitHub</Button>
            </div>
        </div>
    </div>
</div>
