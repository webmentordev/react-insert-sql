import React from 'react'
import logo from '../logo.svg';

function NotFound() {
  return (
    <div className="flex items-center h-[90vh] justify-center">
        <div>
            <img className="loading-2" src={logo} />
            <h1>Page Not Found</h1>
        </div>
    </div>
  )
}

export default NotFound