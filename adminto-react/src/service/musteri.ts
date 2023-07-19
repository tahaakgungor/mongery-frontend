import axios from 'axios';
import { Constants } from '../links';
import { getToken } from '../redux/token/actions';
import { login } from './login';



export type CustomerData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  firmName: string;
  avatar: string;
  description: string;
  address: string;
};

type CreateCustomerResponse = {
  id: number;
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


  export const deleteCustomer = async (customerId: number, token: string): Promise<void> => {
    try {
      const response = await fetch(Constants.API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          query: `
          mutation {
            removeCustomer(id: ${customerId})
          }
          `
        })
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        // Silme işlemi başarılı, isteğe göre gerekli işlemleri yapabilirsiniz
      } else {
        throw new Error(result.errors[0].message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  export const updateCustomer = async (customerId: number, customerData: CustomerData, token: string): Promise<CreateCustomerResponse> => {
    try {
        console.log(customerData,'CustomerData')
        const query = JSON.stringify({
            query: `
              mutation {
                updateCustomer(updateCustomerInput: {
                  id: ${customerId},
                  name: "${customerData.name}",
                  email: "${customerData.email}",
                  phone: "${customerData.phone}",
                  firmName: "${customerData.firmName}",
                  avatar: "${customerData.avatar}",
                  description: "${customerData.description}",
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
            `
          });

      const response = await fetch(Constants.API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body:
            query

      });
      console.log(query,'response')

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        return result.data.updateCustomer;
      } else {
        throw new Error(result.errors[0].message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  export const getCustomer = async (customerId: number, token: string) => {
    try {
      const query = `
      query {
        customer(id: ${customerId}) {
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
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        return result.data.customer;
      }
      throw new Error(result.errors[0].message);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
