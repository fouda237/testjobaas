import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup,  Button } from "react-bootstrap";
  
const StudentForm = (props) => {

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    phone: Yup.string().required("Required"),
    adress: Yup.string().required("Required"),
  });
   // Load data from server and reinitialize student form
  
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
      
          <FormGroup>
          <label htmlFor="firstname">firstname</label>
          
            <input name="firstname" type="text" 
                className="form-control"   placeholder="Enter firstname" required/>
            <ErrorMessage
              name="firstname"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
           
          
          <br/>
          <FormGroup>
          <label htmlFor="lastname">lastname</label>
            <Field name="lastname" type="text" 
                className="form-control"  placeholder="Enter lastname" required/>
            <ErrorMessage
              name="firstname"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <FormGroup>
          <label htmlFor="lastname">email</label>
            <Field name="email" type="text" 
                className="form-control"  placeholder="Enter email" required />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <FormGroup>
          <label htmlFor="phone">phone</label>
            <Field name="phone" type="phone" 
                className="form-control"  placeholder="Enter phone" required/>
            <ErrorMessage
              name="rollno"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <FormGroup>
          <label htmlFor="adress">adress</label>
            <Field name="adress" type="text" 
                className="form-control"  placeholder="Enter adress" required/>
            <ErrorMessage
              name="rollno"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <br/>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default StudentForm;