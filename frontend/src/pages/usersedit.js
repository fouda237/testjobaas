import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup,  Button } from "react-bootstrap";
import { useHistory,useParams } from 'react-router-dom';

// EditStudent Component
const EditUsers = () => {
  const { id } = useParams();
  const [firstname, setFirstname] = useState({});
  const [lastname, setLastname] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [adress, setAdress] = useState({});
  let history = useHistory()
  
  useEffect(() => {
   
    axios
      .get(
        "http://localhost:3002/users/"+id,
      )
      .then((res) => {
        const {firstname, lastname, email, phone,adress } = res.data;
        setFirstname(firstname);
        setLastname(lastname);
        setEmail(email);
        setPhone(phone);
        setAdress(adress);
      })
      .catch((err) => console.log(err));
  }, []);

  //onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(firstname)
    var data = {
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'phone': phone,
      'adress': adress,
    }
    const boby=JSON.stringify(data)
     fetch("http://localhost:3002/addusers/"+id, {
       method: 'PATCH',
       headers: {
         Accept: 'application/form-data',
         'Content-Type': 'application/json',
       },
       body: boby,
     })
     .then(res => res.json())
     .then(
       (result) => {
         alert(result['message'])
         window.location.href = '/users-list';
         if (result['status'] === 'ok') {
           window.location.href = '/users-list';
         }
       }
     )
    // axios
    //   .patch(
    //     "http://localhost:3002/addusers/"+id,
    //     boby
    //   )
    //   .then((res) => {
    //      if (res.status === 200) {
    //       alert("users successfully updated");
    //       ("/users-list");
    //     } else Promise.reject();
    //   })
    //   .catch((err) => alert("Something went wrong"));
  };
  // Return student form
  return (
 
    <div className="form-wrapper">
    <Formik >
      <Form onSubmit={onSubmit}>
    
        <FormGroup>
        <label htmlFor="firstname">firstname</label>
          <input name="firstname" type="text" 
              className="form-control"  value={firstname} onChange={(e) =>setFirstname(e.target.value)}  placeholder="Enter firstname" required/>
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
              className="form-control" value={lastname} onChange={e =>setLastname(e.target.value)} placeholder="Enter lastname" required/>
          <ErrorMessage
            name="lastname"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <br/>
        <FormGroup>
        <label htmlFor="lastname">email</label>
          <Field name="email" type="text" 
              className="form-control" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Enter email" required />
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
              className="form-control" value={phone}  onChange={(e) =>setPhone(e.target.value)} placeholder="Enter phone" required/>
          <ErrorMessage
            name="phone"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <br/>
        <FormGroup>
        <label htmlFor="adress">adress</label>
          <Field name="adress" type="text" 
              className="form-control" value={adress}  onChange={(e) =>setAdress(e.target.value)} placeholder="Enter adress" required/>
          <ErrorMessage
            name="adress"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <br/>
        <Button variant="danger" size="lg" 
          block="block" type="submit">
          updated users
        </Button>
      </Form>
    </Formik>
  </div>
  );
};                                                                                                                     
  
// Export EditStudent Component
export default EditUsers;