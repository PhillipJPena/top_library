<script>
  import { isModalVisible } from './store.js'
</script>

<div id="background" on:click={() => $isModalVisible = false}></div>
<div id="modal" class="p-4 rounded-lg">
  <button on:click={() => $isModalVisible = false}>close</button>
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
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0 0 20px rgba(51, 51, 51, 0.397));
    }
</style>