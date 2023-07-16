import axios from 'axios';
import { Constants } from '../links';
import { CustomInput } from '../pages/apps/Projects/types';

export const addProduct = async (productData: any, token: string) => {

  const customInputs = productData.customFields.map((item: CustomInput) => {
    return {
      key: item.name,
      value: item.placeholder,
    };
  });



  try {
    // GraphQL sorgusu
    const query = `
    mutation CreateProduct($customInputs: [CustomInput!]) {
      createProduct(createProductInput: {
        image: "${productData.image}",
        title: "${productData.name}",
        categoryId: ${productData.category},
        price: ${productData.price},
        stock: ${productData.stock},
        variant: "${productData.variant}",
        description: "${productData.description}",
        customInputs: $customInputs
      }) {
        id
        image
        title
        categoryId
        price
        stock
        variant
        description
        customInputs {
          key
          value
        }
        createdAt
        updatedAt
      }
    }
    `;

    // GraphQL isteği gönder
    const response = await fetch(Constants.API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          input: productData,
          customInputs: customInputs,
        },
      }),

    });

    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return data.data.createProduct;
    }
    throw new Error(data.errors[0].message);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProducts = async (token: string) => {
  try {
    const response = await fetch(Constants.API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
        query {
          products {
            id
            image
            title
            categoryId
            price
            stock
            variant
            description
            customInputs {
              key
              value
            }
            createdAt
            updatedAt
          }
        }
        `,
      }),
    });



    const data = await response.json();
    if (response.ok) {
      return data.data.products;
    }
    throw new Error(data.errors[0].message);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const removeProduct = async (id: number, token: string) => {
  try {
    console.log(id);
    const response = await fetch(Constants.API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
        mutation ($id: Int!) {
          removeProduct(id: $id)
        }
        `,
        variables: {
          id: id,
        },
      }),
    });

    const data = await response.json();

    console.log(data);
    if (response.ok) {
      return data.data.removeProduct;
    }
    throw new Error(data.errors[0].message);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updateProduct = async (productData: any, token: string) => {

  if(productData.stock >= 100){
    productData.variant = "success"
  }
  else if(productData.stock < 100){
    productData.variant = "warning"
  }
  else if(productData.stock <= 1){
    productData.variant = "danger"
  }


  try {
    // GraphQL sorgusu
    const query = `
    mutation {
      updateProduct(updateProductInput: {
        id: ${productData.id},
        title: "${productData.title}",
        price: ${productData.price},
        stock: ${productData.stock},
        variant: "${productData.variant}",
        description: "${productData.description}",
      }) {
        id
        title
        price
        stock
        variant
        createdAt
        updatedAt
      }
    }
    `;

    // GraphQL isteği gönder
    const response = await fetch(Constants.API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          input: productData,
        },
      }),

    });

    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return data.data.updateProduct;
    }
    throw new Error(data.errors[0].message);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

