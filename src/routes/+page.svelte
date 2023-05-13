<script>
    import Header from '$lib/index/Header.svelte';
    import About from '$lib/index/About.svelte';
    import OurCore from '$lib/index/OurCore.svelte';



    import truck_cabin from '$lib/assets/images/truck-cabin.png';
</script>

<Header />
<About />
<OurCore />



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
