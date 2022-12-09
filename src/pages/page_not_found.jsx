import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h3>Page not found</h3>
        <p>Go</p>
        <Link to='/dashboard'>Back</Link>
    </div>
  )
}

export default PageNotFound