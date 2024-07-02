import React from 'react';

const CalendarioJulio: React.FC = () => {
  return (
    <div style={contenedor}>
      <h1 style={titulo}>Julio</h1>
      <div style={diasSemana}>
        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((dia) => (
          <span key={dia} style={diaSemana}>{dia}</span>
        ))}
      </div>
      <div style={calendario}>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i + 1} style={dia}>{i + 1}</div>
        ))}
      </div>
      <div style={elementosDecorativos}>
        <div style={lineaNaranja}></div>
        <div style={logo}>qs</div>
        <img src="C:\Users\47699199\Desktop\nextjs\quit-smoking\imagenes\image 1 (1).png" alt="Logo" style={logo} />

        <div style={curva}></div>
      </div>
      <div style={botones}>
        <button style={boton}>&larr;</button>
        <button style={boton}>&rarr;</button>
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
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif',
};

const titulo: React.CSSProperties = {
  fontSize: '24px',
  color: '#F7931E',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const diasSemana: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '70%',
  textAlign: 'center',
  marginBottom: '10px',
};

const diaSemana: React.CSSProperties = {
  fontSize: '16px',
  color: '#F7931E',
  fontWeight: 'bold',
};

const calendario: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px',
  width: '70%',
};

const dia: React.CSSProperties = {
  width: '100%',
  paddingTop: '100%',
  position: 'relative',
  border: '1px solid #F7931E',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
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
  top: '5%',
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

const botones: React.CSSProperties = {
  position: 'absolute',
  bottom: '5%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px',
};

const boton: React.CSSProperties = {
  backgroundColor: '#F7931E',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  left: '40px', // Ajusta este valor para mover la flecha más a la derecha

};

export default CalendarioJulio;
