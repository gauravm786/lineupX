import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function navbar(){
  return (
<Navbar bg="light" expand="lg">
  <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Aboutus">About Us</Nav.Link>

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

        <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
        <Nav.Link href="#FAQ">FAQ</Nav.Link>


      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )}
export default navbar