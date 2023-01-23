import axios from 'axios';

const BASE_URL = 'http://api.saminjonov.uz';

export const getData = (pathname: string) => {
  return axios.get(BASE_URL + pathname)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}