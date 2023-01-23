import axios from 'axios';

const BASE_URL = 'http://api.saminjonov.uz';

export const getData = (pathname: string) => {
  if (pathname[pathname.length - 1] !== '/') {
    pathname += '/';
  }
  return axios.get(BASE_URL + pathname)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}