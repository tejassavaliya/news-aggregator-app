import React from 'react'
import { Link } from 'react-router-dom';

function NotRouteFound() {
	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
	)
}

export default NotRouteFound