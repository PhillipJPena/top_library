<script>
// @ts-nocheck

  import { books } from './store.js'

  export let book;

  const deleteBook = (book) => {
    let index = $books.indexOf(book)
    $books.splice(index, 1);
    return $books = $books;
  }

</script>
<style>
  /* your styles go here */
</style>

<li class="p-4 border-2 border-black">
  <button on:click={deleteBook(book)}>delete</button>
  <p>{book.title}</p>
  <p>{book.author}</p>
  <p>{book.pages}</p>
  {#if book.isRead === 'on'}
    <p class="text-green-500">read</p>
  {:else}
     <!-- else content here -->
     <p class="text-red-500">unread</p>
  {/if}
</li>

