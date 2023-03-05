<script>
    import Logo from '$lib/Logo.svelte';
</script>



<div class="navbar">
    <div class="container mx-auto">
        <div class="flex mx-auto
      md:flex md:justify-between md:items-center navbar-mobile py-7">
            <div class="flex justify-between md-full">
                <div class="w-28 ml-8 md:ml-0">
                    <Logo />
                </div>
                <button
                        type="button"
                        class="
            text-gray-800
            focus:outline-none
            mr-8
            block lg:hidden
          "
                >
                    <div class="hamburger hover:scale-110">
                        <div class="hamburger_item hamburger_item--first"></div>
                        <div class="hamburger_item hamburger_item--middle"></div>
                        <div class="hamburger_item hamburger_item--last"></div>
                    </div>
                </button>
            </div>
            <div class="
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
                <img class="logo lg:hidden" src="../assets/images/logo.svg">
                <a class="nav-underline" href="/">Acasă</a>
                <a class="nav-underline" href="#">Despre Noi</a>
                <a class="nav-underline" href="#">Contact</a>
                <a  class="nav-underline" href="#">Driver Hub</a>
                <a href="/apply" class="bg-apex-green transition-colors hover:bg-apex-purple py-2 px-7 rounded-full">Aplică acum!</a>
            </div>
        </div>
    </div>
</div>

