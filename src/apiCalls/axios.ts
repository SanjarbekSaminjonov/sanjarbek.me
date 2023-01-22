import axios from 'axios';

export const getData = (pathname: string) => {
  return axios.get(pathname)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}