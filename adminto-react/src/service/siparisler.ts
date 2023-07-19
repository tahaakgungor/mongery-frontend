import { Constants } from '../links';

export const createSiparis = async (siparisData: any, token: string) => {
    const customerId = localStorage.getItem('customerId');
    console.log(siparisData);
    const variables = {
        input: {
            image: 'asd',
            title: 'asdas',
            categoryId: 1,
            stateId: 1,
            shortDesc:" siparisData.products.description",
            variant: 'danger',
            total: siparisData.price * siparisData.quantity,
            products: siparisData.products.map((siparis:any) => {
                return {
             productId: siparis.products.id,
             quantity: siparis.quantity
            }
            }),
            customerId: 1,
        }
    };

    console.log(variables)

    try {
        const query = `
        mutation CreateOrder($input: CreateOrderInput!) {
            createOrder(createOrderInput: $input) {
              id
              image
              title
              category{
                id
                name
                createdAt
                updatedAt
              }
              state{
                id
                name
                createdAt
                updatedAt
              }
              shortDesc
              total
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
              image
              title
              categoryId
              stateId
              shortDesc
              price
              quantity
              variant
              productId
              customerId
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