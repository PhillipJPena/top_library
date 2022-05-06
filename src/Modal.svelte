<script>
  import { modalState } from "./store.js";
  import Icon from "@iconify/svelte";
  import { scale } from "svelte/transition";
</script>

<div id="background" on:click={() => ($modalState = false)} />
<div
  in:scale={{ duration: 300 }}
  id="modal"
  class="p-2 rounded-lg flex flex-col w-72">
  <button
    class="btn btn-square btn-sm btn-ghost text-slate-600 hover:text-red-400 hover:bg-slate-200 self-end"
    on:click={() => ($modalState = false)}>
    <Icon icon="eva:close-circle-outline" height="32" />
  </button>
  <slot><!-- optional fallback --></slot>
</div>

<style>
  #background {
    background-color: #00000060;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  #modal {
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #fff;
    filter: drop-shadow(0 0 20px rgba(51, 51, 51, 0.397));
  }
</style>
