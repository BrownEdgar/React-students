import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import { object, string } from 'yup';
import {BiLogoFacebook, BiLogoGoogle, BiLogoTwitter} from 'react-icons/bi'
import './App.scss';

const initialValues = {
  username: '',
  password: '',
  keepSignedIn: ''
}

const validationSchema = object({
  username: string().min(2).required('Required'),
  password: string().min(8).max(13).matches(/\d/, 'Add a some number in password').required('Required')
})

export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (values, {resetForm}) => {
    const user = {
      id: Date.now(),
      ...values
    }
    setUsers([...users, user])
    resetForm()
  }

  return (
    <div className='container'>
      <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {
          () => {
            return (
              <Form>
                <div className="title">
                  <h1>Sign In</h1>
                  <p>
                    New to Oxyy? <u>Create an Account</u>
                  </p>
                </div>
                <div className='form-group'>
                  <label htmlFor="username">Username or Email Address</label>
                  <Field type='text' name='username' id='username' placeholder='Enter Your Email or Username'/>
                  <ErrorMessage name='username' component='span' className='error'/>
                </div>
                <div className='form-group'>
                  <label htmlFor="password">Password</label>
                  <Field type='password' name='password' id='password' placeholder='Enter Password'/>
                  <ErrorMessage name='password' component='span' className='error'/>
                </div>
                <div className='form-group'>
                  <input type="submit" value='Sign In'/>
                </div>
                <div className='form-group'>
                  <p>
                    <Field type='checkbox' name='keepSignedIn' value='Keep Me Signed In'/> <span>Keep Me Signed In</span>
                  </p>
                </div>
                <div class="create-line-left">
                  <hr />
                  <span>
                    Or sign in with
                  </span>
                  <hr />
                </div>
                <div className='icon-list'>
                  <ul>
                    <li className='facebook'>
                      <BiLogoFacebook />
                      Facebook
                    </li>
                    <li className='google'>
                      <BiLogoGoogle/>
                      Google
                    </li>
                    <li className='twitter'>
                        <BiLogoTwitter/>
                      Twitter
                    </li>
                  </ul>
                  <div>
                    <p>
                      Need to find <u>your username</u> or <u>your password</u>?
                    </p>
                  </div>
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
