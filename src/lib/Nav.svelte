<script lang="ts">
    import Logo from '$lib/Logo.svelte';

    let isOpen = false;
    function toggle(e){
        isOpen = !isOpen;
    }

    function close_nav(e){
      if(isOpen){
        isOpen = !isOpen
      }
    }
</script>



<div class="navbar">
    <div class="container mx-auto">
        <div class="flex mx-auto
      md:flex md:justify-between md:items-center navbar-mobile py-7">
            <div class="flex justify-between md-full">
                <div class="logo ml-8 md:ml-0">
                    <Logo />
                </div>
                <button on:click={toggle} type="button" class="text-gray-800 focus:outline-none mr-8 block lg:hidden" >
                    <div class:hamburger-is-open={isOpen} class="hamburger hover:scale-110">
                        <div class:hamburger-is-open={isOpen} class="hamburger_item hamburger_item--first"></div>
                        <div class:hamburger-is-open={isOpen} class="hamburger_item hamburger_item--middle"></div>
                        <div class:hamburger-is-open={isOpen} class="hamburger_item hamburger_item--last"></div>
                    </div>
                </button>
            </div>
            <div class:slide-nav-shown={isOpen} class="
              slide-nav
              flex
              navbar-links
              fixed lg:relative
              top-0 lg:top-auto
              bg-white lg:bg-transparent
              flex-col
              shadow-lg
              lg:shadow-none
              lg:space-y-0
              lg:flex-row
              lg:items-center
              lg:space-x-10
              lg:mt-0 lg:gap-14 gap-6 font-semibold items-center">
                <div class="logo lg:hidden">
                    <Logo />
                </div>
                <a on:click={close_nav} href="/" class="nav-underline">Acasă</a>
                <a on:click={close_nav} class="nav-underline" href="#">Despre Noi</a>
                <a on:click={close_nav} class="nav-underline" href="#">Contact</a>
                <a on:click={close_nav} class="nav-underline" href="#">Driver Hub</a>
                <a on:click={close_nav} href="/apply" class="bg-apex-green transition-colors hover:bg-apex-purple py-2 px-7 rounded-full">Aplică acum!</a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  .navbar {
    position: relative;
    .logo {
      width: 100px;
    }
    &::after {
      content: '';
      width: 920px;
      height: 142px;
      position: absolute;
      right: 14%;
      top: -18px;
      background-image: url("assets/images/home-arrow.svg");
      background-repeat: no-repeat;
      z-index: -1;
    }
  }


    .nav-underline {
        border-bottom-width: 0;
        background-image: linear-gradient(theme('colors.apex-purple'), theme('colors.apex-purple'));
        background-size: 0 3px;
        background-position: 0 100%;
        background-repeat: no-repeat;
        transition: background-size .2s ease-out;
    }

    .nav-underline:hover {
        background-size: 100% 3px;
    }

  .hamburger {
    height: 25px;
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    &_item {
      height: 3px;
      width: 100%;
      background: black;
      border-radius: 5px;
      transition: transform 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 150ms linear;

      &--first {
        .hamburger-is-open & {
          transform: translate(0, 10.99px) rotate(45deg);
        }
      }

      &--middle {
        .hamburger-is-open & {
          opacity: 0;
        }
      }

      &--last {
        .hamburger-is-open & {
          transform: translate(0, -10.99px) rotate(-45deg);
        }
      }

    }
  }

  @media only screen and (max-width: 1023px) {
    .md-full {
      width: 100%;
    }

    .navbar-mobile {
      flex-direction: column;
    }

    .navbar-links {
      height: 100%;
      padding: 20px;
      width: 220px;
      left: 0;
      z-index: 10;
    }
  }

  // ANIMATIONS

  @media only screen and (max-width: 1023px) {

    .slide-nav {
      visibility: hidden;
      transform: translateX(-100%);
      transition: all 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }

    .slide-nav-shown {
      visibility: visible;
      transform: translateX(0%);
    }
  }
</style>
