import { Constants } from '../links';

export const createKategori = async (kategoriData: string, token: string) => {
    try {
        const query = `

        mutation {
            createCategory(createCategoryInput: {
              name: "${kategoriData}"
            }) {
              id
              name
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
        return data.data.createCategory;
    }
    catch (error) {
        console.log(error);
    }
};

export const getKategoriler = async (token: string) => {
    try {
        const query = `
        query {
            categories {
              id
              name
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
        return data.data.categories;
    }
    catch (error) {
        console.log(error);
    }
}


