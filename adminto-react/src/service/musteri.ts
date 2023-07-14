import axios from 'axios';
import { Constants } from '../links';
import { getToken } from '../redux/token/actions';
import { login } from './login';



export type CustomerData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  firmName: string;
  avatar: string;
  description: string;
  address: string;
};

type CreateCustomerResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
  firmName: string;
  avatar: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};


export const createCustomer = async (customerData: CustomerData, token:string): Promise<CreateCustomerResponse> => {
    try {
       const query = `
  mutation{
    createCustomer(createCustomerInput: {
      name: "${customerData.name}",
      email: "${customerData.email}",
      phone: "${customerData.phone}",
      firmName: "${customerData.firmName}",
      avatar: "${customerData.avatar}",
      description: "${customerData.description}"
      address: "${customerData.address}"
    }) {
      id
      name
      email
      phone
      firmName
      avatar
      description
      address
      createdAt
      updatedAt
    }
  }
`;


      const response = await fetch(Constants.API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          query,
          variables: {
            input: customerData,
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        return result.data.createCustomer;
      } else {
        throw new Error(result.errors[0].message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  export const getCustomers = async (token: string): Promise<CreateCustomerResponse[]> => {
    try {
      const response = await fetch(Constants.API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          query: `
            query {
              customers {
                id
                name
                email
                phone
                firmName
                avatar
                description
                address
                createdAt
                updatedAt
              }
            }
          `
        })
      });

      const result = await response.json();
      console.log(result)

      if (response.ok) {
        return result.data.customers;
      } else {
        throw new Error(result.errors[0].message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };