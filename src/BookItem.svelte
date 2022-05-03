<script>
  export let book;
  console.log(book);
</script>
<style>
  /* your styles go here */
</style>

<li class="p-4 border-2 border-black">
  <p>{book.title}</p>
  <p>{book.author}</p>
  <p>{book.pages}</p>
</li>

