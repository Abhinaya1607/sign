import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Loginform.css'
import {useLocalStorage} from './useLocalStorage'
const Loginform = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .matches(/^[A-Za-z]+$/, 'Only alphabets are allowed')
      .required('*Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('*Required'),
      
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('*Required'),
  });
  
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        console.log(values); 
          // storing input name
          localStorage.setItem('details', JSON.stringify(values));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
        <div className='d-flex align-items-center justify-content-center w-100'>
        <div className='login'>
          <div>
            <Field type="text" placeholder="Name.." name="name" />
            <ErrorMessage name="name" component="div" className='error'/>
          </div>

          <div>
            <Field type="email" name="email" className="box mb-2" placeholder="email.."/>
            <ErrorMessage name="email" component="div"  className='error'/>
           
          </div>
          

          <div>
            <Field type="password" name="password" placeholder="password.." />
            <ErrorMessage name="password" component="div" className='error' />
        </div>
          <button type="submit"  disable={isSubmitting} className='button'>
            Submit
          </button>
        </div>
        </div>
        </Form>
    )}    
    </Formik> 
  );
};


export default Loginform;