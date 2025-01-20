<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import BookCard from "../components/BookCard.vue";
import BookService from "../services/BookService.ts";
import type {Book} from "../interfaces/Book.ts";
interface BookDto {
  id: number
  title: string
  author: string
  genre: string
  year: number
}

// Reactive array of books
const books = ref<Book[]>([])

// Fetch books from your API or service
onMounted(async () => {
  try {
    let data = await BookService.getBooks();

   console.log(data);


  books.value=data;

  console.log(books);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error('Error fetching books:', error)
  }
})
</script>

<template>
  <h1>Books</h1>
  <p>
    <a class="button" href="new_book.html">Create New Book</a>
  </p>

  <table>
    <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Genre</th>
      <th>Year</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="book in books" :key="book.id">
      <BookCard :book="book" />
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
