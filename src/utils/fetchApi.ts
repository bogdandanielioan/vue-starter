// src/utils/fetchApi.ts

export async function fetchApi<T>(
    url: string,
    init: RequestInit = {},
    token?: string
): Promise<T> {
    const BASE_URL = 'http://localhost:8080'
    const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`

    token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJMaWJyYXJ5IE1hbmFnZXIgIiwic3ViIjoidGVzdEBnbWFpbC5jb20iLCJpc3MiOiJNeUNvZGUiLCJleHAiOjE3Mzc4MzM4ODYsImlhdCI6MTczNzQwMTg4NiwiYXV0aG9yaXRpZXMiOlsiYm9vazpyZWFkIiwiUk9MRV9VU0VSIiwiYm9vazp3cml0ZSJdfQ.tK1fxlFXNTtfWlWuXCyWTtWR-StA5Oz4DiWruKY9Uta41e7uNzG0-RLa500QxYF2bFKapxSmH_nHvlIDDYAB5g";
    // Build headers object
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ... (init.headers || {}),
    }

    // If there's a Bearer token, include Authorization
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    const config: RequestInit = {
        ...init,
        headers, // merged headers
    }

    const response = await fetch(fullUrl, config)

    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(
            `HTTP Error ${response.status} (${response.statusText}): ${errorText}`
        )
    }

    return (await response.json()) as T
}
