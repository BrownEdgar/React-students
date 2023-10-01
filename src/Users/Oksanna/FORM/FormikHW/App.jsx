import { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { object, string } from "yup";
import { AiOutlineExclamationCircle } from 'react-icons/ai';

import "./App.css";

const initialValues = {
  username: "",
  password: "",
  email: "",
};

const validationSchema = object({
  username: string().min(2).required("Required"),
  password: string()
    .matches(/^[A-Z]/, "Please start with an uppercase letter!")
    .matches(/\d/, "Must contain at least one digit number!")
    .required("Required"),
  email: string().email("Invalid email format").required("This filed is invalid"),
});

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: Date.now(),
      ...values,
    };

    setUsers([...users, user]);
    resetForm();
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {(formik) => {
          return (
            <Form>
              <div className="form-title">
                <h1>DORSIN</h1>
                <span>Sign up for a new Account</span>
              </div>
              <div className="form-group">
                <label htmlFor="username">First Name</label>
                <Field type="text" name="username" id="username" placeholder="First Name"/>
                <ErrorMessage name="username" component="p" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" id="email"  placeholder="Email" />
                <ErrorMessage name="email" component="p" className="error" />
                {formik.touched.email && formik.errors.email && (
                  <AiOutlineExclamationCircle className="error iconExclamationCircle" />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" id="password" placeholder="Password" />
                <ErrorMessage name="password" component="p" className="error" />
              </div>
              <div className="form-group">
                <button type="submit">Sign in</button>
              </div>

             <div className="form-account">
             <h4>Dont have an account?</h4>
              <span><a href="">Sign in</a></span>
             </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
