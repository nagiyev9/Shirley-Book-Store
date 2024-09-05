export const getAllProducts = async () => {
    const response = await fetch("http://localhost:5000/api/product/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const getProductBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/product/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const addNewProduct = async product => {
    const response = await fetch("http://localhost:5000/api/product/add-product", {
        method: "POST",
        body: product,
    });
    const data = await response.json();
    return data;
};

export const editProduct = async (slug, product) => {
    const response = await fetch(`http://localhost:5000/api/product/update-product/${slug}`, {
        method: "PUT",
        body: product,
    });
    const data = await response.json();
    return data;
};

export const deleteProduct = async slug => {
    const response = await fetch(`http://localhost:5000/api/product/delete-product/${slug}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};