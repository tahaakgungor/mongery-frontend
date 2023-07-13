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

export const login = async (email:string, password:string, dispatch:Function) => {
    console.log(Constants.login)
    console.log(email)
    console.log(password)
    var token = await axios.post<Response>(Constants.login, { email, password }, { headers: { 'Content-Type': 'application/json' },data: { email, password }  })
    console.log(token)

    if (token.data.success) {
        console.log(token.data)
        dispatch(getToken(token.data.data.access_token))

        return token.data.data.access_token
    }
    else {

        throw new Error(token.data.error)

    }
}
