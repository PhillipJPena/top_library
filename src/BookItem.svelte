<script>
  // @ts-nocheck

  import { books, modalState, formType } from "./store.js";
  import Icon from "@iconify/svelte";

  export let title;
  export let author;
  export let pages;
  export let isRead;
  export let date;
  export let uid;

  const handleChecked = () => {
    $books = $books.map(obj => {
      if (obj.uid === uid) {
        return { ...obj, isRead: !isRead };
      }
      return obj;
    });
  };

  const handleDelete = () => {
    $books = $books.filter(obj => obj.uid !== uid);
    console.log($books.length);
  };
</script>

<div
  class="card flex flex-col bg-slate-50 p-2 shadow border-4 border-slate-800">
  <input
    type="checkbox"
    bind:checked={isRead}
    on:input={handleChecked}
    class="checkbox checkbox-accent border-slate-800 border-2 text-white" />
  <div class="p-4">
    <p class="font-bold text-2xl">{title}</p>
    <p>by {author}</p>
    <p>{pages} pgs.</p>
    <p>added: {date}</p>
  </div>
  <div class="self-end">
    <button
      on:click={() => {
        $modalState = true;
        $formType = $books.find(obj => obj.uid === uid);
      }}
      class="btn btn-square btn-sm btn-ghost text-slate-400 hover:text-slate-800 hover:bg-slate-200">
      <Icon icon="fa-regular:edit" height="24" />
    </button>
    <button
      on:click={handleDelete}
      class="btn btn-square btn-sm btn-ghost text-slate-400 hover:text-red-400 hover:bg-slate-200">
      <Icon icon="fa6-regular:trash-can" height="24" />
    </button>
  </div>
</div>
