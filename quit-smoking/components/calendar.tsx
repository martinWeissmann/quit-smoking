'use client'; // Añade esta línea para convertirlo en un Client Component

import React, { useState } from 'react';

const getPrimerDiaDelMes = (mes: number, anio: number): number => {
  // Ajusta el primer día del mes para que el lunes sea el primer día
  return (new Date(anio, mes - 1, 1).getDay() + 6) % 7;
};

const getDiasEnMes = (mes: number, anio: number): number => {
  return new Date(anio, mes, 0).getDate();
};

const Calendario: React.FC = () => {
  const mesActual = new Date().getMonth() + 1;
  const anioActual = new Date().getFullYear();

  const [mes, setMes] = useState(mesActual);
  const [anio, setAnio] = useState(anioActual);

  const dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']; // Comienza con Lunes
  const primerDia = getPrimerDiaDelMes(mes, anio);
  const diasEnMes = getDiasEnMes(mes, anio);

  const avanzarMes = () => {
    if (mes === 12) {
      setMes(1);
      setAnio(anio + 1);
    } else {
      setMes(mes + 1);
    }
  };

  const retrocederMes = () => {
    if (mes === 1) {
      setMes(12);
      setAnio(anio - 1);
    } else {
      setMes(mes - 1);
    }
  };

  // Función para regresar a la página anterior
  const goBack = () => {
    window.history.back();
  };

  // Define las URLs de las páginas a las que se puede redirigir
  const paginas = ['/preguntasbasicas', '/preguntasintermedias', '/preguntasavanzadas'];

  // Función para redirigir a una página aleatoria
  const redirigirPaginaAleatoria = () => {
    const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
    window.location.href = paginaAleatoria;
  };

  // Calcula el número total de celdas para mostrar solo las necesarias
  const totalCeldas = primerDia + diasEnMes;
  const totalFilas = Math.ceil(totalCeldas / 7);
  const celdasVisibles = totalFilas * 7;

  return (
    <div style={contenedor}>
      {/* Flecha de regreso */}
      <span style={flechaRegreso} onClick={goBack}>
        ← 
      </span>

      <h1 style={titulo}>{new Date(anio, mes - 1).toLocaleString('es-ES', { month: 'long' })} {anio}</h1>
      <div style={diasSemana}>
        {dias.map((dia) => (
          <span key={dia} style={diaSemana}>{dia}</span>
        ))}
      </div>
      <div style={calendario}>
        {Array.from({ length: celdasVisibles }, (_, i) => {
          if (i < primerDia || i >= primerDia + diasEnMes) {
            return <div key={i} style={diaContenedor} className="vacío"></div>;
          }
          const dia = i - primerDia + 1;
          return (
            <div 
              key={i} 
              style={diaContenedor} 
              onClick={redirigirPaginaAleatoria} // Redirige al hacer clic en la fecha
            >
              {dia}
            </div>
          );
        })}
      </div>
      <div style={botones}>
        <button style={botonIzquierda} onClick={retrocederMes}>&larr;</button>
        <button style={botonDerecha} onClick={avanzarMes}>&rarr;</button>
      </div>
      <div style={elementosDecorativos}>
        <img 
          src="/vector.png" 
          alt="Línea Decorativa" 
          style={lineaIzquierda} 
        />
        <img 
          src="/OS.png" 
          alt="Logo" 
          style={logo} 
        />
        <img 
          src="/imagen.png" 
          alt="Curva Decorativa" 
          style={curvaDerecha} 
        />
      </div>
    </div>
  );
};

// Aquí están tus estilos...

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
  padding: '10px',
};

const flechaRegreso: React.CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  top: '20px',
  left: '20px',
  fontSize: '44px',
  color: '#F7931E',
};

const titulo: React.CSSProperties = {
  fontSize: '24px',
  color: '#F7931E',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '0',
  textAlign: 'center',
  textTransform: 'uppercase',
};

const diasSemana: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '90%',
  maxWidth: '500px',
  textAlign: 'center',
  marginBottom: '130px',
};

const diaSemana: React.CSSProperties = {
  fontSize: '14px',
  color: '#F7931E',
  fontWeight: 'bold',
  padding: '45px',
  gridColumnGap: '110px',
  marginLeft: '-70px',
};

const calendario: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridGap: '1px',
  width: '100%',
  maxWidth: '590px',
  border: '1px solid #F7931E',
  marginTop: '-160px',
};

const diaContenedor: React.CSSProperties = {
  width: '100%',
  paddingTop: '85%',
  position: 'relative',
  border: '1px solid #F7931E',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  color: '#F7931E',
  fontWeight: 'bold',
};

const botones: React.CSSProperties = {
  position: 'absolute',
  bottom: '2%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10 20px',
  marginBottom: '70px',
  marginLeft: '40px',
};

const botonIzquierda: React.CSSProperties = {
  backgroundColor: '#F7931E',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '60px',
  height: '30px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginLeft: '110px',
  bottom: '42%',
};

const botonDerecha: React.CSSProperties = {
  backgroundColor: '#F7931E',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '60px',
  height: '30px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginRight: '130px',
};

const elementosDecorativos: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  pointerEvents: 'none',
};

const lineaIzquierda: React.CSSProperties = {
  position: 'absolute',
  top: '18%',
  left: '11%',
  width: '200px', 
  height: 'auto',
};

const logo: React.CSSProperties = {
  position: 'absolute',
  top: '5%',
  right: '8%',
  width: '100px', 
  height: 'auto',
};

const curvaDerecha: React.CSSProperties = {
  position: 'absolute',
  bottom: '0%',
  right: '6%',
  width: '170px', 
  height: 'auto',
  objectFit: 'cover',
};

export default Calendario;
