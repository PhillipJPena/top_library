<script>
  import AddBookForm from './AddBookForm.svelte';

  import Modal from './Modal.svelte';

  import BookItem from './BookItem.svelte';

  import BookList from './BookList.svelte';

  import Header from './Header.svelte';

  import { isModalVisible } from './store';

  import './app.css';
  // your script goes here
  let myLibrary = [];
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="p-4">
  <Header />
  <BookList />
</div>
<button on:click={() => $isModalVisible = true}>Add Book</button>

{#each myLibrary as book (book)}
<div class="library">
     <div>{book.title}</div>
     <div>{book.author}</div>
  </div>
{/each}

{#if $isModalVisible}
   <Modal>
     <AddBookForm />
   </Modal>
{/if}