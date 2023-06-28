import React, { useState, useEffect } from "react";
import axios from 'axios';
import UsersForm from "../components/Users-form";
  
// CreateStudent Component
const CreateUsers = () => {
  const [formValues, setFormValues] = useState({   firstname: "",lastname: "",email: "",phone: "",adress: "", })
  // onSubmit handler
  const onSubmit = usersObject => {
    
    axios.post(
'http://localhost:3002/addusers', 
    usersObject)
      .then(res => {
       
        if (res.status === 200)
          alert('Student successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <UsersForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Users
    </UsersForm>
  )
}
  
// Export CreateStudent Component
export default CreateUsers