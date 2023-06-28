// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
  
// Import other React Component
import CreateUsers from "./pages/usersadd";
import EditUsers from "./pages/usersedit";
import UsersList from "./pages/userslist";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-users"} 
                  className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-users"} 
                    className="nav-link">
                    Create Users
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/users-list"} 
                    className="nav-link">
                    Users List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" 
                    component={CreateUsers} />
                  <Route path="/create-users" 
                    component={CreateUsers} />
                  <Route path="/edit-users/:id"   component={EditUsers} />
                  <Route path="/users-list"  component={UsersList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;