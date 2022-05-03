<script>
// @ts-nocheck


  import { books, isModalVisible } from './store.js';

  function handleSubmit(e) {
    const formData = new FormData(e.target)
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
    $books = [...$books, data ]
    $isModalVisible = false;
  }

</script>

<style>
  /* your styles go here */
</style>

<h2 class='text-2xl font-bold px-2'>Add Book</h2>
<form 
class= "p-4 flex flex-col gap-4"
on:submit|preventDefault={handleSubmit}>
  <label for="title">Book Titles:
    <input type="text" name="title">
  </label>
  <label for="author">Book Author:
    <input type="text" name="author">
  </label>
  <label for="pages">Pages:
    <input type="text" name="pages">
  </label>
  <label for="isRead" class='flex center gap-2'>
    <span>Read:</span>
    <input 
    class='h-6 w-6'
    type="checkbox" 
    name="isRead">
  </label>
  <button type="submit">submit</button>
</form>

