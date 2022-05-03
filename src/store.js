import { writable } from "svelte/store";

export const books = writable([
  {
    title: "The Cat in the Hat",
    author: "Dr. Suess",
    pages: 24,
    isRead: "off",
  },
  {
    title: "Green Eggs and Ham",
    author: "Dr. Suess",
    pages: 19,
    isRead: "off",
  },
]);

export const isModalVisible = writable(false);
