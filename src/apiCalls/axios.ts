import axios from 'axios';

const BASE_URL = 'https://api.saminjonov.uz';

export const getData = (endpoint: string) => {
  return axios.get(BASE_URL + endpoint)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}