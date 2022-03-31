import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../logo.svg';

function Post() {
    document.title = "Create Blog Post"
    const [result, setResult] = useState([]);
    const [isSuccess, setSuccess] = useState(false);
    const [isPosting, setPosting] = useState(false);

    const createPost = async (e) => {
      e.preventDefault();
      setPosting(true);
      await axios.post('http://127.0.0.1:8000/api/books/create', {
        title: e.target.title.value,
        author: e.target.author.value,
        image: e.target.image.value
      }).then((response) => {
        setResult(response.data);
        setSuccess(true);
        setPosting(false);
        e.target.title.value = "";
        e.target.author.value = "";
        e.target.image.value = "";
      });
    }

  return (
    <div>
        <h1 className='py-4'>Create Blog Posts</h1>
          {isPosting && <div className="loading-div"><img className="loading" src={logo} /><h3>Posting...</h3></div>}
          <form onSubmit={createPost} method="POST" className='flex flex-col w-4/12 m-auto'>
            { isSuccess == true ? (
                <p className='text-center p-2 bg-green-600 text-white border-l-8 border-green-800'>{ result }</p>
              ) : (
                <p className="product-remaining">Simply Create Post</p>
              )
            }

            <input type="text" name='title' placeholder="Title"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-3" />
            <input type="text" name='author' placeholder="Author"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-3" />
            <input type="text" name='image' placeholder="Image"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-3" />
            <button type="submit" className="bg-blue-600 p-3 rounded-lg text-white font-bold">Create Post</button>
          </form>
    </div>
  )
}

export default Post