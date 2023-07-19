import { Constants } from "../links";


export const createSepet = async (sepetData: any, quantity: number, token: string) => {
    try {
      const query = `
        mutation CreateCart($productId: Int!, $quantity: Int!) {
          createCart(createCartInput: {
            productId: $productId,
            quantity: $quantity,
          }) {
            id
            products {
              id
              image
              title
              category {
                id
                name
              }
              price
              stock
              description
              variant
              createdAt
              updatedAt
              customInputs {
                key
                value
              }
            }
            quantity
            createdAt
            updatedAt
          }
        }
      `;

      const variables = {
        productId: sepetData.id,
        quantity: quantity,
      };

      const response = await fetch(Constants.API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }
      return data.data.createCart;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


export const getSepet = async (token: string) => {
    try {
        const query = `
        query {
            carts {
              id
              products {
                id
                image
                title
                category {
                  id
                  name
                }
                price
                stock
                description
                variant
                createdAt
                updatedAt
                customInputs {
                  key
                  value
                }
              }
              quantity
              createdAt
              updatedAt
            }
          }

        `;
        const response = await fetch(Constants.API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                query,
            }),
        });
        const data = await response.json();
        if (data.errors) {
            throw new Error(data.errors[0].message);
        }
        return data.data.carts;
    }
    catch (error) {
        console.log(error);
    }
    }

export const updateCart = async (id: number, quantity: number, token: string) => {
    console.log(id, quantity);

    try {
        const query = `
        mutation {
            updateCart(updateCartInput: {
              id: ${id}
              quantity: ${quantity}
            }) {
              id
              products {
                id
                image
                title
                category {
                    id
                    name
                }
                price
                stock
                description
                variant
                createdAt
                updatedAt
                customInputs {
                  key
                  value
                }
              }
              quantity
              createdAt
              updatedAt
            }
          }
        `;
        const response = await fetch(Constants.API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                query,
            }),
        });
        const data = await response.json();
        if (data.errors) {
            throw new Error(data.errors[0].message);
        }
        return data.data.updateCart;
    }
    catch (error) {
        console.log(error);
    }
    }




export const removeCart = async (id: number, token: string) => {
    try {
        console.log(id);
        const query = `
        mutation ($id: Int!) {
            removeCart(id: $id)
          }
        `;
        const response = await fetch(Constants.API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                query,
                variables: {
                    id,
                },
            }),
        });
        const data = await response.json();
        if (response.ok) {
            return data.data.removeCart;
        }
        throw new Error(data.errors[0].message);
    }
    catch (error) {
        console.log(error);
        throw error;
    }
    }