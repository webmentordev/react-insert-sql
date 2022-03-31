import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Blog() {
    const [blogArray, setBlogArray] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        fetchFunction();
        document.title = "Blog Page"
    }, []);

    const fetchFunction = async () =>{
        const data = await fetch('http://127.0.0.1:8000/api/books')
        const items = await data.json();
        setBlogArray(items);
        setLoading(false);
    };
    
    return (
        <div className="p-3">
            <h1>Blog Section</h1>
            {isLoading && <div className="loading-div"><img className="loading" src={logo} /><h3>Loading...</h3></div>}
            <div className="grid grid-cols-3 gap-6">
                {
                    blogArray.map(blog=>(
                        <div className="box p-6 bg-gray-200 rounded-lg relative" key={blog.id} loading="lazy">
                            <img className="mb-3" src={blog.image} alt='Blog Image' />
                            <h2 className="mb-2 font-bold">{blog.author}</h2>
                            <p className="mb-3">{blog.title}</p>
                            <p>{blog.created_at} <br></br> {blog.updated_at}</p>
                            <Link className="text-blue-500 underline py-6" to={`/blog/`+blog.id}>ReadMore</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog