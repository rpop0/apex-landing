<script>
    import application from '$lib/assets/images/application.png';
    import truck_cabin from '$lib/assets/images/truck-cabin.png';
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faGithub} from '@fortawesome/free-brands-svg-icons';
    import {faDownload} from '@fortawesome/free-solid-svg-icons';
</script>


<div class="container px-5 md:px-0 md:mx-auto relative mt-10">
    <h1 class="font-soulmaze text-2xl md:text-4xl">About Us</h1>
    <h1 class="text-4xl md:text-6xl font-soulmaze-outline absolute -top-1.5 md:-top-2.5 md:-left-4 opacity-40">About Us</h1>
    <p class="mt-5 text-gray-500">Lorem ipsum dolor sit amet, <span class="text-underline font-semibold">Apex Express</span> consectetur adipiscing elit. Mauris lobortis cursus libero a scelerisque. In consequat tristique sapien sed rutrum. Curabitur eu magna ante. Morbi accumsan leo quis lectus vulputate, et dapibus mi rutrum. Integer bibendum gravida purus, in tristique purus dignissim eget. Quisque facilisis tortor velit, at aliquet orci rhoncus nec. Sed at dignissim odio, a sodales nulla. Vivamus eget libero eros. </p>
</div>

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
      <div class="flex justify-end gap-5">
        <a href="#" class="bg-apex-green py-3 px-7 rounded-full mt-8 font-semibold md:text-xl text-base"><Fa icon={faDownload} class='inline mr-3' />Descarcă Aplicația</a>
        <a href="#" class="bg-black text-white py-3 px-7 rounded-full mt-8 font-semibold md:text-xl text-base"><Fa icon={faGithub} class='inline mr-3' />GitHub</a>
      </div>
    </div>
  </div>
</div>


<div class="container px-5 md:px-0 md:mx-auto relative mt-20">
    <div class="grid grid-cols-3 items-center">
      <div class="col-span-2" data-aos="fade-right">
        <h1 class="font-soulmaze text-2xl md:text-4xl">About our divisions</h1>
        <h1 class="text-4xl md:text-6xl font-soulmaze-outline absolute -top-1.5 md:-top-2.5 md:-left-4 opacity-40">About our divisionS</h1>
        <p class="text-gray-500 mt-5">Lorem ipsum dolor sit amet, Apex Express consectetur adipiscing elit. Mauris lobortis cursus libero a scelerisque. In consequat tristique sapien sed rutrum. Curabitur eu magna ante. Morbi accumsan leo quis lectus vulputate, et dapibus mi rutrum. </p>
        <div class="flex mt-5">
          <a href="#" class="bg-apex-green py-3 px-7 font-semibold rounded-full">Vezi mai multe</a>
        </div>
      </div>
      <div>
        <div class="flex justify-end align-top">
          <img class="hidden md:block" src={truck_cabin} />
        </div>
      </div>
    </div>
</div>

<style>

</style>