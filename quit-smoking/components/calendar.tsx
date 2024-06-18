import React from 'react';


const Calendar: React.FC = () => {
  
  return (
  
    <div style={styles.calendar}>                              
      <div style={styles.header}>
        <div style={styles.day}>Lunes</div>
        <div style={styles.day}>Martes</div>
        <div style={styles.day}>Miércoles</div>
        <div style={styles.day}>Jueves</div>
        <div style={styles.day}>Viernes</div>
        <div style={styles.day}>Sábado</div>
        <div style={styles.day}>Domingo</div>
      </div>
      <div style={styles.week}>
        <div style={styles.date}></div>
        <div style={styles.date}></div>
        <div style={styles.date}></div>
        <div style={styles.date}></div>
        <div style={styles.date}></div>
        <div style={styles.date}>1</div>
        <div style={styles.date}>2</div>
      </div>
      <div style={styles.week}>
        <div style={styles.date}>3</div>
        <div style={styles.date}>4</div>
        <div style={styles.date}>5</div>
        <div style={styles.date}>6</div>
        <div style={styles.date}>7</div>
        <div style={styles.date}>8</div>
        <div style={styles.date}>9</div>
      </div>
      <div style={styles.week}>
        <div style={styles.date}>10</div>
        <div style={styles.date}>11</div>
        <div style={styles.date}>12</div>
        <div style={styles.date}>13</div>
        <div style={styles.date}>14</div>
        <div style={styles.date}>15</div>
        <div style={styles.date}>16</div>
      </div>
      <div style={styles.week}>
        <div style={styles.date}>17</div>
        <div style={styles.date}>18</div>
        <div style={styles.date}>19</div>
        <div style={styles.date}>20</div>
        <div style={styles.date}>21</div>
        <div style={styles.date}>22</div>
        <div style={styles.date}>23</div>
      </div>
      <div style={styles.week}>
        <div style={styles.date}>24</div>
        <div style={styles.date}>25</div>
        <div style={styles.date}>26</div>
        <div style={styles.date}>27</div>
        <div style={styles.date}>28</div>
        <div style={styles.date}>29</div>
        <div style={styles.date}>30</div>
      </div>
      <div style={styles.logo}></div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  calendar: {
    display: 'grid',
    gridTemplateRows: 'auto repeat(5, 1fr)',
    maxWidth: '600px',
    margin: '100px auto',
    border: '1px solid BLACK',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    borderBottom: '1px solid black',
  },
  day: {
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e6702e',
  },
  week: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
  },
  date: {
    borderRight: '1px solid black',
    borderBottom: '1px solid BLACK',
    padding: '20px',
    textAlign: 'center',
    color: '#e6702e',
  },
  logo: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    fontSize: '20px',
    color: '#e6702e',
  },
};

export default Calendar;
