// src/services/BookService.ts

import { fetchApi } from '../utils/fetchApi.ts'

class BookService {
    private basePath = '/api/v1/books'

    /**
     * GET /api/v1/books
     */
    async getBooks(token?: string): Promise<Book[]> {
        return fetchApi<Book[]>(this.basePath, {}, token)
    }

    /**
     * POST /api/v1/books/add
     * Requires ROLE_USER (Bearer token).
     */
    async addBook(bookDto: BookDto, token?: string): Promise<Book> {
        return fetchApi<Book>(
            `${this.basePath}/add`,
            {
                method: 'POST',
                body: JSON.stringify(bookDto),
            },
            token
        )
    }

    /**
     * PUT /api/v1/books/update/{id}
     */
    async updateBook(bookDto: BookDto, id: number, token?: string): Promise<Book> {
        return fetchApi<Book>(
            `${this.basePath}/update/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(bookDto),
            },
            token
        )
    }

    /**
     * GET /api/v1/books/findBook/{id}
     */
    async findBookById(id: number, token?: string): Promise<Book> {
        return fetchApi<Book>(`${this.basePath}/findBook/${id}`, {}, token)
    }

    /**
     * DELETE /api/v1/books/delete/{id}
     */
    async deleteBook(id: number, token?: string): Promise<Book> {
        return fetchApi<Book>(
            `${this.basePath}/delete/${id}`,
            {
                method: 'DELETE',
            },
            token
        )
    }
}

export default new BookService()
