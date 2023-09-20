import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import { number, object, string } from 'yup'
import './App.scss'

const initiaValues = {
  username: '',
  password: '',
  age: '',
  language:[]

}

const validationSchema = object({
  username: string().min(2).required("required"),
  password: string()
    .min(8)
    .max(20)
    .matches(/^[A-Z]/, 'please start with uppercase!')
    .matches(/\d/, 'must contain  one or mor digin number!')
    .required("required"),
  age:number().positive().integer().moreThan(18).lessThan(70)
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
  console.log(users);
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
                <div className='form-group'>
                  <label htmlFor="username">Username</label>
                  <Field type="text" name="username" id="username" />
                  <ErrorMessage name='username' component='p' className='error' />
                </div>
                <div className='form-group'>
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" id="password" />
                  <ErrorMessage name='password' component='p' className='error' />
                </div>
                <div className='form-group'>
                  <label htmlFor="age">Age</label>
                  <Field type="text" name="age" id="age" />
                  <ErrorMessage name='age' component='p' className='error' />
                </div>
                <div className='form-group'>
                  <label>select language</label>
                  <p>

                  <Field type="checkbox" name="language" value="Html" /> <span>Html</span>
                  </p>

                  <p>

                  <Field type="checkbox" name="language" value="Css" /> <span>Css</span>
                  </p>
                  <p>

                  <Field type="checkbox" name="language" value="Js" checked /> <span>Js</span>
                  </p>
                </div>
                <div className='form-group'>
                  <input type="text" value='Register' />
                </div>
              </Form>
            )
          }
        }

      </Formik>
    </div>
  )
}