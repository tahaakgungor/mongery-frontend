import axios from 'axios';
import { Constants } from '../links';
import { getToken } from '../redux/token/actions';



export type Response = {
    success: boolean;
  } & (SuccessfullResponse | FailedResponse)

  export type SuccessfullResponse = {
    success: true;
    data: {
        access_token: string
    };
  }

  export type FailedResponse = {
    success: false;
    error: string;
  }

export const login = async (email:string, password:string) => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let response = await fetch(Constants.login, {
  method: requestOptions.method,
  headers: requestOptions.headers,
  body: requestOptions.body,
  redirect: "follow"
})
let data = await response.json()
console.log(data)
if (data.success) {
  return data.data.access_token
} else {
  return false
}
}
