import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "5519983730008";
  const message = encodeURIComponent("Olá! Gostaria de fazer um orçamento.");
  
  // Estado para controlar a visibilidade do balão (opcional: ele pode começar aberto)
  const [showTip, setShowTip] = useState(true);

  return (
    <div style={styles.container}>
      {showTip && (
        <div style={styles.tooltip} className="whatsapp-tooltip">
          Olá! Estamos disponíveis para conversar.
          <button 
            onClick={() => setShowTip(false)} 
            style={styles.closeBtn}
          >
            ×
          </button>
        </div>
      )}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        className="whatsapp-float"
      >
        <FaWhatsapp size={35} />
      </a>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  tooltip: {
    backgroundColor: '#fff',
    color: '#222',
    padding: '8px 15px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: '500',
    position: 'relative',
    border: '1px solid #C1BBAA',
    whiteSpace: 'nowrap',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    marginLeft: '8px',
    cursor: 'pointer',
    color: '#999',
    fontWeight: 'bold',
  },
  button: {
    width: '60px',
    height: '60px',
    backgroundColor: '#25d366',
    color: '#FFF',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
};

export default WhatsAppButton;