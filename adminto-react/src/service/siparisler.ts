import { Constants } from '../links';

export const createSiparis = async (siparisData: any, token: string) => {
    try {
        const query = `
        mutation {
            createOrder(createOrderInput: {
              image: "${siparisData.image}","
              title: "${siparisData.title}",
              categoryId: "${siparisData.categoryId}",
              stateId: "${siparisData.stateId}",
              shortDesc: "${siparisData.shortDesc}",
              price: "${siparisData.price}",
              quantity: "${siparisData.quantity}",
              variant: "${siparisData.variant}",
              productId: "${siparisData.productId}",
              customerId: "${siparisData.customerId}",
            }) {
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