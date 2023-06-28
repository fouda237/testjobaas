import React from "react";
import { Button } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";

const UsersTableRow = (props) => {
  const { _id, firstname,lastname, email, phone,adress } = props.obj;
  let history = useHistory()
  const deleteStudent = () => {
    console.log(_id)
    axios.delete(
         "http://localhost:3002/deleteusers/"+_id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          history("/users-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"+err));
  };
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{adress}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-users/"+ _id}>
          Edit
        </Link>
        <br/>
        <br/>
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default UsersTableRow;