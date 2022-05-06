<script>
  import "./app.css";
  import AddBookForm from "./AddBookForm.svelte";
  import Modal from "./Modal.svelte";
  import BookList from "./BookList.svelte";
  import Header from "./Header.svelte";
  import { modalState, formType } from "./store";
  import BookItem from "./BookItem.svelte";
</script>

<svelte:window
  on:keydown={e => {
    e.key === "b" && !$modalState ? ($modalState = true) : "";
    e.key === "Escape" && $modalState ? ($modalState = false) : "";
  }} />

<div class="p-4 flex flex-col h-screen gap-4">
  <Header />
  <BookList />
  <button
    class="btn m-8"
    on:click={() => {
      $modalState = true;
      $formType = null;
    }}>Add Book</button>
</div>

{#if $modalState === true}
  <Modal><AddBookForm edit={$formType} /></Modal>
{/if}
