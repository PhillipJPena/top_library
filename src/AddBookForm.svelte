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
    <input type="text" name="title" value="unknown" required >
  </label>
  <label for="author">Book Author:
    <input type="text" name="author" value="unknown" required>
  </label>
  <label for="pages" >Pages:
    <input type="number" max="10000" name="pages" value="0" required>
  </label>
  <label for="isRead" class='flex center gap-2'>
    <input 
    class='h-6 w-6'
    type="checkbox" 
    name="isRead">
    <span>Read</span>
  </label>
  <button type="submit">submit</button>
</form>

