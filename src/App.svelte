<script>
  import './app.css';
  import AddBookForm from './AddBookForm.svelte';
  import Modal from './Modal.svelte';
  import BookList from './BookList.svelte';
  import Header from './Header.svelte';
  import { isModalVisible } from './store';
</script>

<svelte:window on:keydown={(e) => {
  (e.key === 'b' && !$isModalVisible) ? $isModalVisible = true : '';
  (e.key === 'Escape' && $isModalVisible) ? $isModalVisible = false : '';
}} />

<div class="p-4">
  <Header /> 
  <BookList />
  <button on:click={() => $isModalVisible = true}>Add Book</button>
</div>

{#if $isModalVisible}
   <Modal>
     <AddBookForm />
   </Modal>
{/if}