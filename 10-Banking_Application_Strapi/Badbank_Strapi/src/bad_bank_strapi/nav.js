import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbars() {
  return (
    <div id="nav">
      <Navbar id='navbar' variant="dark">
        <Container>
          <Navbar.Brand href="/">Bad Bank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/create">Create</Nav.Link>
            <Nav.Link href="#/deposit">Deposit</Nav.Link>
            <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
            <Nav.Link href="#/alldata">All Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
