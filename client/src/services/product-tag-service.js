export const getAllProductTag = async () => {
    const response = await fetch("http://localhost:5000/api/product/tag/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }, 
    });
    const data = response.json();
    return data;
};

export const getProductTagBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/product/tag/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = response.json();
    return data;
};

export const addNewProductTag = async tag => {
    const response = await fetch("http://localhost:5000/api/product/tag/add-tag", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(tag)
    });
    const data = response.json();
    return data;
};

export const editProductTag = async (slug, tag) => {
    const response = await fetch(`http://localhost:5000/api/product/tag/update-tag/${slug}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(tag)
    });
    const data = response.json();
    return data;
};

export const deleteProductTag = async slug => {
    const response = await fetch(`http://localhost:5000/api/product/tag/delete-tag/${slug}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = response.json();
    return data;
};