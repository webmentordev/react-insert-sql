import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gray-900">
        <div className="w-5/12 m-auto flex justify-between p-4 items-center">
            <Link className="text-white mx-3 font-bold" to="/">FlexAPI</Link>
            <ul>
                <Link className="text-white mx-6" to="/">Home</Link>
                <Link className="text-white mx-6" to="/about">About</Link>
                <Link className="text-white mx-6" to="/services">Services</Link>
                <Link className="text-white mx-6" to="/blog">Blog</Link>
                <Link className="text-white mx-6" to="/post">Post</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar