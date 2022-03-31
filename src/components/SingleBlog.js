import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../logo.svg';

function SingleBlog() {
    const id  = useParams().id;
    const [singleBlog, setBlog] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetchFunction();
        }, 3000);
    }, []);

    const fetchFunction = async () =>{
        const data = await fetch(`http://127.0.0.1:8000/api/books/${id}`)
        const item = await data.json();
        setBlog(item);
        setLoading(false);
    };

    return (
        <div className="p-3">
            <h1>Blog Section</h1>
            {isLoading && <div class="loading-div"><img className="loading" src={logo} /><h3>Loading...</h3></div>}
            <img className="mb-3 w-full" src={singleBlog.image} />
            <h2 className="mb-2 font-bold">{singleBlog.author}</h2>
            <p className="float-right">{singleBlog.created_at} - {singleBlog.created_at}</p>
            <p>{ singleBlog.title }</p>
        </div>
    )
}

export default SingleBlog