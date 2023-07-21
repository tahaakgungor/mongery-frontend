import { Constants } from '../links';

export const createSiparis = async (siparisData: any, token: string) => {
    const customerId = localStorage.getItem('customerId');
    console.log(siparisData);
    const variables = {
        input: {
            stateId: 1,
            variant: 'danger',
            products: siparisData.products.map((siparis:any) => {
                return {
             productId: siparis.products.id,
             quantity: siparis.quantity
            }
            }),
            customerId: Number(customerId),
        }
    };

    console.log(variables)

    try {
        const query = `
        mutation CreateOrder($input: CreateOrderInput!) {
            createOrder(createOrderInput: $input) {
              id
              state{
                id
                name
                createdAt
                updatedAt
              }
              variant
              customer{
                id
                name
                email
                phone
                address
                firmName
                avatar
                description
                address
                createdAt
                updatedAt
              }
              products {
                  id
                  orderId
                  quantity
                  productId
              }
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
            variables,
        }),
        });
        const data = await response.json();
        if (data.errors) {
        throw new Error(data.errors[0].message);
        }
        return data.data.createOrder;
    }
    catch (error) {
        console.log(error);
    }
    }

export const getSiparisler = async (token: string) => {
    try {
        const query = `
        query {
            orders {
              id
              customer {
                  id
                  name
                  email
                  firmName
              }
              state {
                  id
                  name
              }
              total
              variant
              products {
                  orderId
                  productId
                  quantity
                  product {
                      price
                      title
                      createdAt
                      updatedAt
                      category {
                          id
                          name
                      }
                      customInputs {
                          key
                          value
                      }
                  }
              }
              invoice {
                  fileName
                  mimeType
                  proforma
              }
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
        return data.data.orders;
    }
    catch (error) {
        console.log(error);
    }
}

export const updateSiparis = async (id: number, stateId: number, token: string) => {
    try {
      const query = `
        mutation UpdateOrder($input: UpdateOrderInput!) {
          updateOrder(updateOrderInput: $input) {
            id
            state {
              id
              name
              createdAt
              updatedAt
            }
            variant
            customer {
              id
              name
              email
              phone
              address
              firmName
              avatar
              description
              address
              createdAt
              updatedAt
            }
            products {
              id
              orderId
              quantity
              productId
            }
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
          variables: {
            input: {
              id: id, // Update variable name to "id"
              stateId: stateId,
              variant: 'danger',
            },
          },
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }
      return data.data.updateOrder;
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteSiparis = async (id: number, token: string) => {
    try {
      const query = `
      mutation RemoveOrder($orderId: Int!) {
        removeOrder(id: $orderId)
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
                orderId: id,
            },
        }),
        });
        const data = await response.json();
        console.log(data);
        if (data.errors) {
            throw new Error(data.errors[0].message);
        }
        return data.data.removeOrder;
    } catch (error) {
        console.log(error);
    }
    };
    