export const getAllUsers = async () => {
    const response = await fetch('http://localhost:5000/api/user/get-all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    const data = await response.json();
    return data;
};

export const getUserBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/user/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    const data = await response.json();
    return data;
};

export const updateUser = async (slug, user) => {
    const response = await fetch(`http://localhost:5000/api/user/update-user/${slug}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
};