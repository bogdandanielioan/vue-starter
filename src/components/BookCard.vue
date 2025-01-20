<script setup lang="ts">
import type { BookDto } from '@/interfaces/BookDto'

const props = defineProps<{
  book: BookDto
}>()
</script>

<template>
  <td>
    <a :href="`book_detail.html?id=${props.book.id}`">
      {{ props.book.title }}
    </a>
  </td>
  <td>{{ props.book.author }}</td>
  <td>{{ props.book.genre }}</td>
  <td>{{ props.book.year }}</td>
</template>
