import React from 'react';
import { Navbar, Nav, Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import logoVertical from './assets/logoVertical.png';
import logobase from './assets/logobase.png'
import './App.css';
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { 
  MdOutlineArchitecture, 
  MdOutlineChair, 
  MdOutlineBusinessCenter 
} from 'react-icons/md';
import { HiOutlineLightBulb, HiOutlineHome } from 'react-icons/hi';
import { GiFactory } from 'react-icons/gi';
import WhatsAppButton from './components/WhatsAppButton'; // ajuste o caminho se necessário


const App: React.FC = () => {
  return (
    <div>
      {/* 1. CABEÇALHO */}
      <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
        <Container fluid style={{ maxWidth: '1400px' }}>
          <Navbar.Brand href="#home">
            <img
              src={logobase}
              alt="Logo Arquitetura"
              className="d-inline-block align-top"
              style={{ height: '75px' }}
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

      <Carousel id="home" fade interval={5000}>
        <Carousel.Item style={{ height: '80vh' }}>
          <img
            className="d-block w-100 h-100 carousel-img"
            style={{ objectFit: 'cover' }}
            src="https://carolcustodioarquitetura.com.br/wp-content/uploads/2020/09/Fachada__1-Photo.jpg"
            alt="Fachada"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '80vh' }}>
          <img
            className="d-block w-100 h-100 carousel-img"
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
            <h2 style={{ borderLeft: "6px solid #C1BBAA", paddingLeft: "10px", textAlign: "left" }}>
              Sobre a Empresa
            </h2>
            <p></p>

            <p style={{ textAlign: "justify" }}>
              <strong>Transformamos ideias em experiências únicas.</strong> Com sede em Cordeirópolis, nossa empresa nasce da união entre gerações: pai e filha que compartilham a paixão por criar espaços que unem a precisão da engenharia com a sensibilidade da arquitetura. Mais do que projetos, entregamos soluções completas que traduzem sonhos em ambientes funcionais, sofisticados e inspiradores.
            </p>

            <p style={{ textAlign: "justify" }}>
              Cada detalhe é pensado para valorizar a estética, otimizar recursos e garantir excelência técnica. Atuamos em projetos residenciais, comerciais e corporativos, sempre com foco em inovação, sustentabilidade e personalização. Nosso compromisso é oferecer não apenas construções, mas experiências que refletem identidade, propósito e estilo de vida.
            </p>

            <p style={{ textAlign: "justify" }}>
              Seja para erguer uma obra do zero ou repaginar espaços já existentes, estamos prontos para transformar desafios em conquistas e ideias em realidade.<strong>Arquitetura e engenharia lado a lado, tradição e modernidade em perfeita harmonia.</strong>
            </p>
          </Col>

          <Col md={6}>
            <img
              src={logoVertical}
              alt="logoVertical"
              className="img-fluid rounded shadow"
              style={{ height: '450px' }}
            />

          </Col>
        </Row>
      </Container>

  {/* 4. PROJETOS / SERVIÇOS */}
      <div id="projetos" style={{ backgroundColor: '#C1BBAA', color: 'white' }} className="py-5">
        <Container className="py-4">
          <h2 className="text-center mb-5" style={{ fontWeight: '300', letterSpacing: '2px', color: '#222222' }}>
            NOSSOS SERVIÇOS
          </h2>
          <Row>
            {[
              { 
                title: "Projetos de Arquitetura", 
                icon: <MdOutlineArchitecture size={40} style={{ color: '#C1BBAA' }} /> 
              },
              { 
                title: "Projeto de Interiores", 
                icon: <MdOutlineChair size={40} style={{ color: '#C1BBAA' }} /> 
              },
              { 
                title: "Consultoria de Decoração", 
                icon: <HiOutlineLightBulb size={40} style={{ color: '#C1BBAA' }} /> 
              },
              { 
                title: "Projetos Comerciais", 
                icon: <MdOutlineBusinessCenter size={40} style={{ color: '#C1BBAA' }} /> 
              },
              { 
                title: "Projetos Residenciais", 
                icon: <HiOutlineHome size={40} style={{ color: '#C1BBAA' }} /> 
              },
              { 
                title: "Projetos Industriais", 
                icon: <GiFactory size={40} style={{ color: '#C1BBAA' }} /> 
              },
            ].map((item, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card 
                  className="h-100 border-0 shadow-sm transition-hover" 
                  style={{ borderRadius: '0', backgroundColor: '#fdfdfd' }}
                >
                  <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '180px' }}>
                    <div className="mb-3">
                      {item.icon}
                    </div>
                    <Card.Title className="mb-0" style={{ color: '#222', fontSize: '1.1rem', fontWeight: '500' }}>
                      {item.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ESPAÇO DE RESPIRO (Spacer) */}
      {/* Esse div vazio cria um respiro visual com a cor de fundo do site antes do footer */}
      <div style={{ height: '50px', backgroundColor: '#fcfcfcff' }}></div>

      {/* 5. RODAPÉ E CONTATOS */}
      <footer id="contatos" style={{ backgroundColor: '#EFEDE5', color: '#222222'}} className="pt-5">
        <Container>
          <Row className="mb-4">
            {/* Sessão 1: Vamos Conversar */}
            <Col md={3} className="mb-4 text-start">
              <h5 className="mb-3" style={{ color: '#C1BBAA', fontWeight: 'bold' }}>Vamos conversar?</h5>
              <a
                href="https://wa.me/5519983730008"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center text-decoration-none"
                style={{ color: '#222222' }} // Texto em Grafite para leitura no fundo claro
              >
                <FaWhatsapp size={24} className="me-2 text-success" />
                <span>WhatsApp</span>
              </a>
            </Col>

            {/* Sessão 2: Informações de Contato */}
            <Col md={3} className="mb-4 text-start">
              <h5 className="mb-3" style={{ color: '#C1BBAA', fontWeight: 'bold' }}>Informações de Contato</h5>
              <p className="mb-2 d-flex align-items-center">
                <FaPhoneAlt className="me-2" style={{ color: '#C1BBAA' }} />
                (19) 3546-XXXX
              </p>
              <p className="d-flex align-items-center">
                <FaEnvelope className="me-2" style={{ color: '#C1BBAA' }} />
                contato@empresa.com.br
              </p>
            </Col>

            {/* Sessão 3: Endereço */}
            <Col md={3} className="mb-4 text-start">
              <h5 className="mb-3" style={{ color: '#C1BBAA', fontWeight: 'bold' }}>Endereço</h5>
              <div className="d-flex align-items-start">
                <IoLocationSharp size={20} className="me-2 mt-1" style={{ color: '#C1BBAA' }} />
                <p className="small mb-0">
                  Praça Comendador Jamil Abrahão Saad, 85<br />
                  Centro, Cordeirópolis - SP
                </p>
              </div>
            </Col>

            {/* Sessão 4: Siga-me */}
            <Col md={3} className="mb-4 text-start"> {/* Alinhado à esquerda conforme solicitado */}
              <h5 className="mb-3" style={{ color: '#C1BBAA', fontWeight: 'bold' }}>Siga-me</h5>
              <a
                href="https://instagram.com/hit_arquiteturaengenharia"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#222222' }}
              >
                <FaInstagram size={30} />
              </a>
            </Col>
          </Row>

          {/* Mapa */}
          <Row className="pb-4">
            <Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.475453676184!2d-47.4578161!3d-22.486348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c87895e691238d%3A0xc354b321a0a52011!2zUHLDonZhIENvbWVuZGFkb3IgSmFtaWwgQWJyYWhhbyBTYWFkLCA4NSAtIENlbnRybywgQ29yZGVpcsOzcG9saXMgLSBTUCwgMTMxMDAtMDAw!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>

        {/* Faixa Inferior */}
        <div className="py-3 text-center" style={{ backgroundColor: '#ffffffff', color: '#1b1b1aff', fontSize: '0.85rem' }}>
          <Container>
            <p className="mb-0">
              Desenvolvido por: <a href="https://ragda.com.br" target="_blank" rel="noreferrer" style={{ color: '#695a31ff', textDecoration: 'none', fontWeight: 'bold' }}>RAGDA - ragda.com.br</a> - Todos os direitos reservados.
            </p>
          </Container>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export default App;