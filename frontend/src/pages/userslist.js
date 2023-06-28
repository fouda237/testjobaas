import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import UsersTableRow from "../components/userTableRow";
  
const UsersList = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3002/users/")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return users.map((user, i) => {
      return <UsersTableRow  obj={user} key={i}  />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>lasstname</th>
            <th>Email</th>
            <th>phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default UsersList;