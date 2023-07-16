import { Constants } from "../links";

export const createState = async (stateData: string, token: string) => {
    try {
        const query = `
        mutation {
        createState(createStateInput: {
            name: "${stateData}"
        }) {
            id
            name
        }
        }
        `;
        const response = await fetch(Constants.API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
        return data.data.createState;
    } catch (error) {
        console.log(error);
    }
    }

export const getStates = async (token: string) => {
    try {
        const query = `
        query {
            states {
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
        return data.data.states;
    }
    catch (error) {
        console.log(error);
    }
}