<script>
import Fa from 'svelte-fa/src/fa.svelte'
import {faPatreon, faDiscord} from '@fortawesome/free-brands-svg-icons'
</script>


<h1 class="">

  <div class="header flex items-center">
    <div class="container px-5 md:px-0 md:mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <h1 class="text-4xl md:text-6xl font-soulmaze-outline millions opacity-40">Millions of Miles</h1>
          <h1 class="text-2xl md:text-4xl font-soulmaze">Millions of Miles<br>with Smiles<span class="text-primary">.</span></h1>
          <h1 class="text-4xl md:text-6xl font-soulmaze-outline smiles opacity-40">with Smiles</h1>
          <p class="text-lg font-semibold mt-2"><span class="text-underline">Changing The Way Virtual Trucking Is Today</span></p>
          <div class="flex gap-5 mt-8">
            <a href="#" class="bg-patreon font-semibold p-3 px-7 rounded-full text-center"><Fa icon={faPatreon} class='inline mr-3' />Patreon</a>
            <a href="#" class="bg-discord font-semibold p-3 px-7 rounded-full text-center"><Fa icon={faDiscord} class='inline mr-3' />Discord</a>
          </div>
        </div>
      </div>
    </div>
    <img data-aos="fade-down" data-aos-offset="500" data-aos-duration="500" :src="require('~/assets/images/apex-truck.png')">
  </div>
</h1>


<style>
.text-primary {
  color: #00F3B3;
}

.bg-discord {
  background-color: #5865F2;
  color: white;
}

.bg-patreon {
  background-color: #F96854;
  color: white;
}

.bg-github {
  background-color: #171515;
}

.header {
  height: 350px;
  position: relative;
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

@media only screen and (max-width: 1279px) {
  .header {
    height: 250px;
  }
    img {
      display: none;
    }
    .left {
      margin-left: 34px;
    }
}
</style>