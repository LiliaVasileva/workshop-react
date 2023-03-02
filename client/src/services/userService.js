
const baseUrl = 'http://localhost:3005/api';

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/users`);
    const result = await response.json();
    return result.users;
}


export const getById = async (id) => {
    const response = await fetch(`${baseUrl}/users/${id}`);
    const result = await response.json();
    return result.user;
}


export const create = async (userData) => {
    console.log("Inside create")
    const response = await fetch(
        `${baseUrl}/users`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    const result = await response.json();

    return result.user
}
