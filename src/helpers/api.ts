import axios from 'axios';

export default axios.create({
  baseURL: 'https://ultraton-back.herokuapp.com/api/',
});
