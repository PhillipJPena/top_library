<script>
  // @ts-nocheck

  import { claim_svg_element } from "svelte/internal";

  import Book from "./models/bookModel.js";
  import { books, modalState } from "./store.js";

  export let edit;

  function addNewBook(e) {
    const formData = new FormData(e.target);
    const data = {};

    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    $books = [...$books, new Book(data)];
    $modalState = false;
  }

  function editBook(e) {
    const formData = new FormData(e.target);
    for (let field of formData) {
      const [key, value] = field;
      edit[key] = value;
    }

    edit.isRead = edit.isRead ?? null;

    $books = $books.map(obj => {
      if (obj.uid === edit.uid) {
        return { ...edit };
      }
      return obj;
    });
    $modalState = false;
  }
</script>

<h2 class="text-2xl font-bold px-4">{edit ? "Edit" : "Add"} Book</h2>
<form
  class="p-4 flex flex-col gap-2"
  on:submit|preventDefault={!edit ? addNewBook : editBook}>
  <label class="label-text" for="title">Book Titles: </label>
  <input
    class="input input-bordered"
    type="text"
    name="title"
    value={edit ? edit.title : "unknown"}
    required />
  <label class="label-text" for="author">Book Author: </label>
  <input
    class="input input-bordered"
    type="text"
    name="author"
    value={edit ? edit.author : "unknown"}
    required />
  <div class="flex flex-col gap-2">
    <label class="label-text" for="pages">Pages: </label>
    <input
      class="input input-bordered"
      type="number"
      max="10000"
      name="pages"
      value={edit ? edit.pages : "0"}
      required />
  </div>
  <div class="flex flex-col gap-2">
    <label for="isRead" class="label-text">Read </label>
    <input
      class="checkbox checkbox-accent border-slate-800 border-2 text-white checkbox-lg"
      type="checkbox"
      name="isRead"
      checked={edit ? edit.isRead : false}
      on:input={e => {
        if (!e.target.checked && edit) {
          edit.isRead = false;
        }
      }} />
  </div>
  <button class="btn mt-4" type="submit">submit</button>
</form>
