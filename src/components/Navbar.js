import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandNavbar() {
  return (
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className='text-white'>考照預約報名</Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default BrandNavbar;