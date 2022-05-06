<script>
  // @ts-nocheck

  import BookItem from "./BookItem.svelte";
  import { books } from "./store.js";
  import { fly, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
</script>

<ul
  class="flex flex-wrap justify-center gap-4 w-full bg-slate-200 p-4 rounded-xl">
  {#each $books as book (book.uid)}
    <!-- content here -->
    <li transition:scale animate:flip={{ duration: 400 }}>
      <BookItem {...book} />
    </li>
  {/each}
  {#if !$books.length}
    <div>
      <p class="text-slate-400 font-bold">
        Click 'Add Book' to add to your library.
      </p>
    </div>
  {/if}
</ul>
