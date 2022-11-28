import React from 'react'
import {useDispatch} from 'react-redux'
import { useFormik } from 'formik'
import { loginAction } from './tempLoginAction';


function TempLogin() {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, onSubmit: (values) => {
      dispatch(loginAction(values))
    }
  })

  return (
    <div className='container w-50 mx-auto my-5'>
      <form onSubmitCapture={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input className='form-control' type="text" name='email' onChange={formik.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Password:</label>
          <input className='form-control' type="password" name='password' onChange={formik.handleChange} />
        </div>
        <div className="form-group">
          <button className='btn btn-success'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default TempLogin