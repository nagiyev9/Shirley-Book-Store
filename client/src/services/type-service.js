export const getAllTypes = async () => {
    const response = await fetch("http://localhost:5000/api/type/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = response.json();
    return data;
};

export const getTypeBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/type/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = response.json();
    return data;
};

export const addNewType = async type => {
    const response = await fetch("http://localhost:5000/api/type/add-type", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(type)
    });
    const data = response.json();
    return data;
};  

export const editType = async (slug, type) => {
    const response = await fetch(`http://localhost:5000/api/type/update-type/${slug}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(type)
    });
    const data = response.json();
    return data;
};

export const deleteType = async slug => {
    const response = await fetch(`http://localhost:5000/api/type/delete-type/${slug}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = response.json();
    return data;
};
