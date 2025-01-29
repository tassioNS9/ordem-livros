<script>
  import Logo from "./Logo.svelte";
  import {
    IconMenu2,
  } from "@tabler/icons-svelte";
  import {toggleMenu} from "../../store.js";

</script>

<header
  class="
    flex justify-between items-center h-24 px-8
    border-b border-zinc-800
  "
>
  <Logo />
  <button class="hidden max-md:block max-lg:block" on:click={toggleMenu}><IconMenu2 size={30} id="menu-btn" /></button>

</header>
