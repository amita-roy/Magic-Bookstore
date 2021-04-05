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
}

export default new BooksApi();
