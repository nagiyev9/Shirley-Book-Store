export const getAllCategories = async () => {
    const response = await fetch("http://localhost:5000/api/category/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const getCategoryBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/category/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const addNewCategory = async category => {
    const response = await fetch("http://localhost:5000/api/category/add-category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
};

export const editCategory = async (slug, category) => {
    const response = await fetch(`http://localhost:5000/api/category/update-category/${slug}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
};

export const deleteCategory = async slug => {
    const response = await fetch(`http://localhost:5000/api/category/delete-category/${slug}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};