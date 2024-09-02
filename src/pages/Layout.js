// import{ Outlet,Link } from "react-router-dom";
// const Layout=()=>{
//     return(
//         <div>
//             <nav>
//                 <ul>
//                 <li><Link to="/">Home<Link></li>
//                 <li><Link to ="/Contact">Contact</Link></li> 
//                 <li><Link to ="/Blogs">Blogs</Link></li> 
//                 <li><Link to ="/NoPage">NoPage</Link></li>  
//                 </ul>
//             </nav>
//             <Outlet/>
//         </div>
//     )
// }
// export default Layout;
 

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet,Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand href="/">WEBSITE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/NoPage">NoPage</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
}

export default Layout;