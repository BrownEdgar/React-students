import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import { object, string } from 'yup'

import "./App.scss"

const initialValues = {
  username: '',
  password: '',
  language: []
}

const validationSchema = object({
  username: string().min(2).required("required"),
  password: string()
    .min(8)
    .max(20)
    .matches(/^[A-Z]/, 'please start with uppercase!')
    .matches(/\d/, 'must contain one or mor digin number!')
    .required("required")
})

export default function App() {
  const [users, setUsers] = useState([])
  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: Date.now(),
      ...values,
    }
    setUsers([...users, user]);
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
          (formik) => {
            console.log(formik)
            return (
              <Form>
                <div className='form-group'>
                  <label htmlFor="username">username</label>
                  <Field type="text" name="username" id="username" />
                  <ErrorMessage name='username' component='p' className='error' />
                </div>
                <div className='form-group'>
                  <label htmlFor="password">password</label>
                  <Field type="password" name="password" id="password" />
                  <ErrorMessage name='password' component='p' className='error' />
                </div>
                <div className='form-group'>
                  <label>select language</label>
                  <p>
                    <Field type="checkbox" name="language" value="Html" /> <span>Html</span>
                  </p>
                  <p>
                    <Field type="checkbox" name="language" value="css" /> <span>css</span>
                  </p>
                  <p>
                    <Field type="checkbox" name="language" value="javascript" checked /> <span>javascript</span>
                  </p>
                </div>
                <div className='form-group'>
                  <input type="submit" value="register" />
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
