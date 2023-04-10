<script>
	import '../app.postcss';
	import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">
</svelte:head>
<div class="home-app">
    <Nav />
    <slot />
</div>


<style lang="scss">
  .home-app {
    &::before {
      content: '';
      background-image: url("src/lib/assets/images/burshed-circle-left.svg");
      position: absolute;
      width: 614px;
      height: 956px;
      left: 0;
    }
    &::after {
      content: '';
      background-image: url("src/lib/assets/images/burshed-circle-right.svg");
      position: absolute;
      width: 665px;
      height: 943px;
      right: 0;
      top: 40%;
      z-index: -1;
    }
  }

  .text-underline::after {
    content: '';
    width: 100%;
    height: 39%;
    background: theme('colors.apex-green');
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
