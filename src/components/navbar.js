import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Outlet, Link } from "react-router-dom";

function Navbars(){
  return (
    <>
<Navbar bg="light" expand="lg">
  <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/">Home</Link>
        <Link to="/Aboutus">About Us</Link>

        {/* Registration/Login  */}
        <NavDropdown title="Registration/Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="Registration">Employer Registration/Login</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="Login">Candidate Registration/Login</NavDropdown.Item>
        </NavDropdown>

        {/* Panel       */}
        <NavDropdown title="Panel" id="basic-nav-dropdown">
        <NavDropdown.Item href="ClientPanel">Employer Panel</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="CandidatePanel">Candidate Panel</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link" to>Link</Nav.Link>
        <Nav.Link to="/ContactUs">Contact Us</Nav.Link>
        <Nav.Link to="/FAQ">FAQ</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
<Outlet />
</Navbar>
<img src="office.jpg" alt="office" />
</>
  )}
export default Navbars


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function navbar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default navbar;