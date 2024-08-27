import React from 'react';

const App: React.FC = () => {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoPart1}>Q</span>
          <span style={styles.logoPart2}>S</span>
          <span style={styles.logoText}>Quit Smoking</span>
        </div>
        <div style={styles.icons}>
          <div style={styles.icon}>
            <img src="/calendario.png" alt="Calendario" style={styles.iconImage} />
            <p style={styles.iconText}>Calendario</p>
          </div>
          <div style={styles.icon}>
            <img src="/consejos.png" alt="Consejos" style={styles.iconImage} />
            <p style={styles.iconText}>Consejos</p>
          </div>
          <div style={styles.icon}>
            <img src="/medicos.png" alt="Medicos" style={styles.iconImage} />
            <p style={styles.iconText}>Medicos</p>
          </div>
          <div style={styles.icon}>
            <img src="/premios.png" alt="Premios" style={styles.iconImage} />
            <p style={styles.iconText}>Premios</p>
          </div>
        </div>
      </header>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center' as 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
  },
  logoPart1: {
    fontSize: '60px',
    color: '#F2994A', // Color naranja
    fontWeight: 'bold' as 'bold',
  },
  logoPart2: {
    fontSize: '60px',
    color: '#000000', // Color negro
    fontWeight: 'bold' as 'bold',
    marginLeft: '-10px',
  },
  logoText: {
    fontSize: '36px',
    color: '#000000', // Color negro
    fontWeight: 'bold' as 'bold',
    marginLeft: '10px',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    maxWidth: '800px',
  },
  icon: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  iconImage: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
  },
  iconText: {
    fontSize: '18px',
    fontWeight: 'bold' as 'bold',
    color: '#000000', // Color negro
  },
};

export default App;
