<script>
  import AreaLateral from "./AreaLateral.svelte";
  import Cabecalho from "./Cabecalho.svelte";
  import Rodape from "./Rodape.svelte";
  import {menuAberto} from "../../store.js";
  let valor;
  const unsubscribe = menuAberto.subscribe(($menuAberto) => {
    valor = $menuAberto;
  });
</script>

<div
  class=" relative
    flex flex-col min-h-screen
  bg-black text-white
  "
>
  <Cabecalho />
  <div class="flex-1 flex max-w-7xl mx-auto w-full p-5 relative">
    <main class="flex-1">
      <slot></slot>
    </main>
    <div class={$menuAberto ? "block" : "hidden"}>
      <AreaLateral />
    </div>

  </div>
  <Rodape />
</div>
