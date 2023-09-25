import { Formik, } from 'formik'
import { useState } from 'react'
import { object, string } from 'yup'


import './App.scss'
import MainForm from './MainForm'


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
    setUsers([...users, user])
    resetForm()
  }

  return (
    <div className='container'>
      <Formik
        initialValues={initiaValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <MainForm />
      </Formik>
    </div>
  )
}
