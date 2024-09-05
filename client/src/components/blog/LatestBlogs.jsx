import React from 'react';
import './latestBlog.css';

const blogs = [
    {
        id: 1,
        title: "Significant reading has a more info number",
        date: "10 November, 2019",
        comments: "0 comments",
        image: "/images/blog01.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus nam deserunt vitae ullam amet quos! Nescient, quo."
    },
    {
        id: 2,
        title: "Activities of the Frankfurt Book International",
        date: "10 November, 2019",
        comments: "0 comments",
        image: "/images/blog02.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus nam deserunt vitae ullam amet quos! Nescient, quo."
    },
    {
        id: 3,
        title: "The London Book Fair is to be packed with exciting",
        date: "10 November, 2019",
        comments: "0 comments",
        image: "/images/blog03.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum deleniti repellendus nam deserunt vitae ullam amet quos! Nescient, quo."
    }
];

const LatestBlogs = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-center text-3xl font-semibold my-12">LATEST BLOGS</h2>
            <div className="flex flex-wrap justify-between">
                {blogs.map(blog => (
                    <div key={blog.id} className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 blog-div">
                            <img
                                className="w-full h-full object-cover blog-image"
                                src={blog.image}
                                alt={blog.title}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2 border-b-2 border-gray-500 pb-4">{blog.title}</h3>
                                <div className="text-sm text-gray-600 mb-4 pt-4">
                                    <span>{blog.date}</span>
                                    <span className="mx-2">\</span>
                                    <span>{blog.comments}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{blog.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;
