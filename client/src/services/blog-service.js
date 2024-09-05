export const getAllBlogs = async () => {
    const response = await fetch("http://localhost:5000/api/blog/get-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = response.json();
    return data;
};

export const getBlogBySlug = async slug => {
    const response = await fetch(`http://localhost:5000/api/blog/${slug}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = response.json();
    return data;
};

export const addNewBlog = async blog => {
    const response = await fetch("http://localhost:5000/api/blog/add-blog", {
        method: "POST",
        body: blog
    });
    const data = await response.json();
    return data;
};

export const editBlog = async (slug, blog) => {
    const response = await fetch(`http://localhost:5000/api/blog/update-blog/${slug}`, {
        method: "PUT",
        body: blog
    });
    const data = await response.json();
    return data;
};

export const deleteBlog = async slug => {
    const response = await fetch(`http://localhost:5000/api/blog/delete-blog/${slug}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });
    const data = response.json();
    return data;
};