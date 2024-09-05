export const getAllRoles = async () => {
    const response = await fetch("http://localhost:5000/api/role/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = await response.json();
    return data;
};

export const getRoleBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/role/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = await response.json();
    return data;
};

export const addNewRole = async role => {
    const response = await fetch("http://localhost:5000/api/role/add-role", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(role)
    });
    const data = await response.json();
    return data;
};

export const editRole = async (slug, role) => {
    const response = await fetch(`http://localhost:5000/api/role/update-role/${slug}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(role)
    });
    const data = await response.json();
    return data;
};

export const deleteRole = async slug => {
    const response = await fetch(`http://localhost:5000/api/role/delete-role/${slug}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = await response.json();
    return data;
};