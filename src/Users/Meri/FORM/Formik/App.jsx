import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import './App.scss';

const initialValues = {
  username: '',
  password: '',
  age: '',
  language: []
};

const validationSchema = object({
  username: string().min(2).required('Required'),
  password: string()
    .min(8)
    .max(12)
    .matches(/^[A-Z]/, 'Need to start with uppercase')
    .required('Required'),
  age: number().positive().lessThan(65).moreThan(18).required('Required')
});

export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (values, {resetForm}) => {
    const user = {
      id: Date.now(),
      ...values,
    }
    setUsers([...users, user])
    resetForm()
  };

  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          console.log(formik);
          return(
          <Form>
            <div className='form-group'>
              <label htmlFor="username">Username</label>
              <Field type='text' name='username' id='username' />
              <ErrorMessage name='username' component='p' className='error'/>
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <Field type='password' name='password' id='password' />
              <ErrorMessage name='password' component='p' className='error'/>
            </div>
            <div className='form-group'>
              <label htmlFor="age">Age</label>
              <Field type='text' name='age' id='age' />
              <ErrorMessage name='age' component='p' className='error'/>
            </div>
            <div className='form-group'>
              <label>Select language</label>
              <p>
                <Field type='checkbox' name='language' value='English' checked/> <span>English</span>
              </p>
              <p>
                <Field type='checkbox' name='language' value='Spanish' /> <span>Spanish</span>
              </p>
              <p>
                <Field type='checkbox' name='language' value='Arabic' /> <span>Arabic</span>
              </p>
            </div>
            <div className='form-group'>
              <input type="submit" value='Register'/>
            </div>
          </Form>
          )
        }}
      </Formik>
    </div>
  );
}
