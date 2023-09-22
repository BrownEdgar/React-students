import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import { number, object, string } from 'yup'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsGoogle } from 'react-icons/bs'

import './App.scss'


const initiaValues = {
  username: '',
  password: '',
}

const validationSchema = object({
  username: string().min(2).required("required"),
  password: string()
    .min(8)
    .max(20)
    .matches(/^[A-Z]/, 'please start with uppercase!')
    .matches(/\d/, 'must contain  one or mor digin number!')
    .required("required"),
})


export default function App() {

  const [users, setUsers] = useState([])
  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: Date.now(),
      ...values,
    }
    console.log(user);
    setUsers([...users, user])
    resetForm()

  }
  return (

    <div className='container'>

      <Formik
        initialValues={initiaValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {
          (formik) => {
            console.log(formik);
            return (
              <Form>

                <div className='text-group'>
                  <h2>Sign In</h2> <br />
                  <span>New to Oxyy? <a href="https://www.facebook.com/"><u>Create on Account</u></a></span>
                </div>

                <div className='form-group'>
                  <label htmlFor="username">Username or Email Addres</label>
                  <Field type="text" name="username" id="username" placeholder="Enter Your Email" />
                  <ErrorMessage name='username' component='p' className='error' />
                </div>

                <div className='form-group'>
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" id="password" placeholder="Enter Password" />
                  <ErrorMessage name='password' component='p' className='error' />
                </div>

                <div className='form-group'>
                  <p>
                    <Field type="checkbox" name="Sihn in" /> <span>Keep me signed in</span>
                  </p>
                </div>

                <div className='form-group'>
                  <input className='register-input' type="submit" value='Sign In' />
                </div>

                <div className='icon_div'>
                  <span className='facebook'>   <FaFacebookF /> <a href="https://www.facebook.com/" target='_blank'>Faccebook</a> </span>
                  <span className='google'>  <BsGoogle /> <a href="https://www.google.com/" target='_blank'> Google</a> </span>
                  <span className='twitter'>  <BsTwitter /> <a href="https://twitter.com/" target='_blank'>Twitter</a> </span>
                </div>

                <div className='text'>
                  <p>Need to find <u>your username</u> or <u>your password ?</u></p>
                </div>

              </Form>
            )
          }
        }

      </Formik>
    </div>
  )
}
