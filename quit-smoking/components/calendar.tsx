'use client';

import React, { useState } from 'react';



const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const getDaysInMonth = (date: Date) => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push('');
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div style={styles.container}>
      <div style={styles.navigation}>
        
      </div>
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
          {days.map((day, index) => (
            <div key={index} style={styles.date}>{day}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  month: {
    margin: '0 20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  calendar: {
    display: 'grid',
    gridTemplateRows: 'auto repeat(16, 1fr)',
    border: '10px solid black',
    borderRadius: '18px',
    overflow: 'hidden',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    borderBottom: '11px solid black',
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
    borderBottom: '1px solid black',
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
