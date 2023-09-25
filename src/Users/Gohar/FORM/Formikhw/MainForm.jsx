import { Form, Field, ErrorMessage } from 'formik'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsGoogle } from 'react-icons/bs'

export default function MainForm() {
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
        <span className='facebook'>
          <FaFacebookF />
          <a
            href="https://www.facebook.com/"
            target='_blank'
            rel="noreferrer">
            Faccebook
          </a>
        </span>
        <span className='google'>  <BsGoogle /> <a href="https://www.google.com/" target='_blank' rel="noreferrer"> Google</a> </span>
        <span className='twitter'>  <BsTwitter /> <a href="https://twitter.com/" target='_blank' rel="noreferrer">Twitter</a> </span>
      </div>

      <div className='text'>
        <p>Need to find <u>your username</u> or <u>your password ?</u></p>
      </div>

    </Form>
  )
}
