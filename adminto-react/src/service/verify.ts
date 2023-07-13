import { Constants } from '../links';

export type Response = {
    success: boolean;
  } & (SuccessfullResponse | FailedResponse)

  export type SuccessfullResponse = {
    success: true;
    data: boolean;
  }

  export type FailedResponse = {
    success: false;
    error: string;
  }

export const verifyToken = async (token:string) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "token": "Bearer " + token
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let response = await fetch(Constants.verify, {
  method: requestOptions.method,
  headers: requestOptions.headers,
  body: requestOptions.body,
  redirect: "follow"
})
let data = await response.json() as Response
console.log(data)
if (data.success) {
  return data.data
} else {
throw new Error(data.error)
}
}
