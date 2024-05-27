import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!localStorage.getItem('authtok') && <Nav.Link href="/login">Login</Nav.Link>}
            <Nav.Link href="/cars">Cars</Nav.Link>
            {localStorage.getItem('authtok') && <Nav.Link href="/mycars">Mycars</Nav.Link>}
            {localStorage.getItem('authtok') && <Nav.Link href="/addcar">Addcar</Nav.Link>}
            {'  '}
            {localStorage.getItem('authtok') && <Nav.Link href="/logout">Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;