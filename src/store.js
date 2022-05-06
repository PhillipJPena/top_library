// @ts-nocheck
import { writable } from "svelte/store";
import Book from "./models/bookModel";

export const books = writable([
  new Book({title:'Book 1', author:"Doctor Seuss", pages:23}),
  new Book({title:'Book 2', author:"Doctor Seuss", pages:23}),
  new Book({title:'Book 3', author:"Doctor Seuss", pages:23}),
]);

export const modalState = writable(false);
export const formType = writable(null);
