import axios from 'axios';

export default axios.create({
  baseURL: 'http://services.solucx.com.br/mock/',
  headers: {
    'Content-type': 'application/json',
  },
});
