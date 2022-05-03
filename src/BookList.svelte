<script>
  import BookItem from "./BookItem.svelte"
  import { books } from './store.js'

console.log($books);
</script>

<style>
  /* your styles go here */
</style>

<ul class="flex gap-4 flex-wrap">
  {#each $books as book}
    <BookItem book={book}/>
  {/each}
</ul>

