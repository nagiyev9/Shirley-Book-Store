export const getAllBlogTags = async () => {
    const response = await fetch("http://localhost:5000/api/blog/tag/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const getBlogTagBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/blog/tag/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = await response.json();
    return data;
};

export const addNewBlogTag = async tag => {
    const response = await fetch("http://localhost:5000/api/blog/tag/add-tag", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(tag),
    });
    const data = response.json();
    return data;
};

export const editBlogTag = async (slug, tag) => {
    const response = await fetch(`http://localhost:5000/api/blog/tag/update-tag/${slug}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(tag),
    });
    const data = response.json();
    return data;
};

export const deleteBlogTag = async slug => {
    const response = await fetch(`http://localhost:5000/api/blog/tag/delete-tag/${slug}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const data = response.json();
    return data;
}