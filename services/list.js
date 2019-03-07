import {urls} from '../const/const'

export const listService = {
    getList,
};

function getList() {
  return fetch(urls.API_ENDPOINT)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.data.children;
    })
    .catch(error => {
      console.error(error);
    });
}