// @ts-nocheck
import { writable } from "svelte/store";
import Book from "./models/bookModel";

const stored = localStorage.content

export const books = writable(JSON.parse(localStorage.getItem('book')) || [
  new Book ({title:"Little Red Riding Hood", author:"Aesop", pages:12, isRead:true})
]);

books.subscribe((content) => localStorage.book = JSON.stringify(content))

export const modalState = writable(false);

export const formType = writable(null);
