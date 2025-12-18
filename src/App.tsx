import React from 'react';
import { Navbar, Nav, Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import logoVertical from './assets/logoVertical.png';

const App: React.FC = () => {
  return (
    <div>
      {/* 1. CABEÇALHO */}
      <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
        <Container fluid style={{ maxWidth: '1400px' }}>
          <Navbar.Brand href="#home">
            <img
              src={logoVertical}
              alt="Logo Arquitetura"
              className="d-inline-block align-top"
              style={{ height: '200px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ gap: '4rem' }}>
              <Nav.Link href="#home" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Home</Nav.Link>
              <Nav.Link href="#sobre" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Sobre a Empresa</Nav.Link>
              <Nav.Link href="#projetos" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Projetos</Nav.Link>
              <Nav.Link href="#contatos" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Contatos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 2. BANNER (CAROUSEL) */}
      <Carousel id="home" fade interval={5000}>
        <Carousel.Item style={{ height: '80vh' }}>
          <img
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            src="https://carolcustodioarquitetura.com.br/wp-content/uploads/2020/09/Fachada__1-Photo.jpg"
            alt="Fachada"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '80vh' }}>
          <img
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            src="https://carolcustodioarquitetura.com.br/wp-content/uploads/2020/09/04.jpg"
            alt="Interior"
          />
        </Carousel.Item>
      </Carousel>

      {/* 3. SOBRE A EMPRESA */}
      <Container id="sobre" className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{ borderLeft: '5px solid #C1BBAA', paddingLeft: '15px' }}>Sobre a Empresa</h2>
            <p className="mt-4">
              Com sede em Cordeirópolis, nossa empresa une a precisão da engenharia com a estética da arquitetura.
              Buscamos transformar sonhos em espaços funcionais e inspiradores.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=800"
              alt="Sobre"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>

      {/* 4. PROJETOS / SERVIÇOS */}
      <div id="projetos" style={{ backgroundColor: '#C1BBAA', color: 'white' }} className="py-5">
        <Container>
          <h2 className="text-center mb-5">Nossos Serviços</h2>
          <Row g={4}>
            {[
              "Arquitetura", "Interiores", "Consultoria",
              "Comerciais", "Residenciais", "Industriais"
            ].map((item, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <Card.Title style={{ color: '#222' }}>{item}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* 5. RODAPÉ E CONTATOS */}
      <footer id="contatos" className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h4>Contatos</h4>
              <p>📍 Praça Comendador Jamil Abrahão Saad, 85 – Centro, Cordeirópolis - SP</p>
              <p>
                📞 <a href="https://wa.me/SEUNUMERO" className="text-white text-decoration-none">WhatsApp: (19) 9XXXX-XXXX</a>
              </p>
              <p>📸 <a href="#" className="text-white text-decoration-none">Instagram: @empresa</a></p>
            </Col>
            <Col md={6}>
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.843187212456!2d-47.4587635!3d-22.4725355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c87890f5a77033%3A0x7d06e2373004d9c!2sPrav%CC%A7a%20Comendador%20Jamil%20Abrah%C3%A3o%20Saad%2C%2085%20-%20Centro%2C%20Cordeir%C3%B3polis%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default App;