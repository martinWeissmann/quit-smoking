import React from 'react';

const PreguntasSeguimiento: React.FC = () => {
  return (
    <div style={contenedor}>
      <h1 style={titulo}>Preguntas de seguimiento</h1>
      <div style={elementosDecorativos}>
        <div style={lineaNaranja}></div>
        <div style={logo}>qs</div>
        <div style={curva}></div>
      </div>
    </div>
  );
};

const contenedor: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif',
};

const titulo: React.CSSProperties = {
  fontSize: '24px',
  color: '#F7931E',
  fontWeight: 'bold',
};

const elementosDecorativos: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const lineaNaranja: React.CSSProperties = {
  position: 'absolute',
  top: '20%',
  left: 0,
  width: '10%',
  height: '2px',
  backgroundColor: '#F7931E',
};

const logo: React.CSSProperties = {
  position: 'absolute',
  top: '10%',
  right: '5%',
  fontSize: '24px',
  color: '#F7931E',
  fontWeight: 'bold',
};

const curva: React.CSSProperties = {
  position: 'absolute',
  bottom: '10%',
  right: '10%',
  width: '50px',
  height: '50px',
  borderTop: '2px solid #F7931E',
  borderLeft: '2px solid #F7931E',
  borderRadius: '25px',
  transform: 'rotate(45deg)',
};

export default PreguntasSeguimiento;
