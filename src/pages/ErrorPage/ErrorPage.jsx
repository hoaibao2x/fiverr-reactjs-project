import React from 'react'
import { history } from '../../App'

function ErrorPage() {
  return (
    <div className='container mx-auto'>
          <img className='img-fluid' onClick={() => {
            history.push('/admin');
          }} src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-17.png.webp" alt="" style={{cursor: 'pointer'}}/>
    </div>
  )
}

export default ErrorPage