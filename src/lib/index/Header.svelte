<script>
import {faPatreon, faDiscord} from '@fortawesome/free-brands-svg-icons';
import apex_truck from '$lib/assets/images/apex-truck.png';
import Button from "$lib/Button.svelte";
</script>


<div class="container mx-auto grid grid-cols-3 items-center mt-20">
  <div class="col-span-3 lg:col-span-2 container px-5 md:px-0 md:mx-auto">
      <div class="flex flex-col">
        <h1 class="text-4xl md:text-6xl font-soulmaze-outline millions opacity-40">Millions of Miles</h1>
        <h1 class="text-2xl md:text-4xl font-soulmaze">Millions of Miles<br>with Smiles<span class="text-primary">.</span></h1>
        <h1 class="text-4xl md:text-6xl font-soulmaze-outline smiles opacity-40">with Smiles</h1>
        <p class="text-lg font-semibold mt-2"><span class="text-underline">Changing The Way Virtual Trucking Is Today</span></p>
        <div class="flex flex-row gap-5 mt-8">
          <Button type="patreon" icon={faPatreon}>Patreon</Button>
          <Button type="discord" class="bg-red" icon={faDiscord}>Discord</Button>
        </div>
      </div>
  </div>
  <img class="hidden lg:block w-[35vw] absolute right-0"  src="{apex_truck}">
</div>

<style>
.text-primary {
  color: #00F3B3;
}

.millions {
        margin-bottom: -30px;
        margin-left: -20px;
        z-index: -1;
  }

.smiles {
    margin-top: -30px;
    margin-left: -20px;
    z-index: -1;
  }

</style>
