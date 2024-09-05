export const getAllComments = async () => {
    const response = await fetch("http://localhost:5000/api/comment/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const getCommentsByProductID = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/comment/product/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
        const data = await response.json();
        return Array.isArray(data) ? data : []; 
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};


export const addNewComment = async commnet => {
    const response = await fetch("http://localhost:5000/api/comment/add-comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(commnet),
    });
    const data = await response.json();
    return data;
};

export const deleteComment = async id => {
    const response = await fetch(`http://localhost:5000/api/comment/delete-comment/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};