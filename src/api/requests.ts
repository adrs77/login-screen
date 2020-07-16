// @ts-ignore
import {baseURL} from '../constants/constants.ts'

export const post = (data: Object) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => {
        if (response.ok) {
            return {auth: true};
        }
        throw Error(response.statusText);
      })
      .catch(error => {
        return {auth: false};
      });
}