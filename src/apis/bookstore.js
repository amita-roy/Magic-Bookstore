import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/api',
});

class BooksApi {
  fetchBooks = async () => {
    const response = await client.get('/books', {
      headers: {
        accept: 'appliction/json',
      },
    });
    return response.data;
  };

  createBook = async (book) => {
    const response = await client.post('/books', book);
    return response;
  };
}

export default new BooksApi();
