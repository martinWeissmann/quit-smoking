'use client';

import React, { useState } from 'react';
import calendarImage from './assets/calendar-icon.png';  // Ruta a tu imagen


const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const getMonthName = (date: Date) => {
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return monthNames[date.getMonth()];
  };

  const getDaysInMonth = (date: Date) => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth - 1; i++) {
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
        <button onClick={prevMonth} style={styles.navButton}>←</button>
        <h1 style={styles.month}>{getMonthName(currentDate)}</h1>
        <button onClick={nextMonth} style={styles.navButton}>→</button>
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
    maxWidth: '800px',
    margin: '0px auto',
    textAlign: 'center',
    position: 'relative',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  navButton: {
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#e6702e',
  },
  month: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#e6702e',
  },
  calendar: {
    display: 'grid',
    gridTemplateRows: 'auto repeat(6, 1fr)',
    border: '5x solid #e6702e',
    borderRadius: '1px',
    overflow: 'hidden',
    height:'330px',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    borderBottom: '1px solid #e6702e',
  
  },
  day: {
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e6702e',
    backgroundColor:'white',
  },
  week: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
  },
  date: {
    border: '1px solid #e6702e', 
    borderRight: '1px solid #e6702e',
    borderBottom: '1px solid #e6702e',
    padding: '20px',
    textAlign: 'center',
    color: '#e6702e',
  },
};

export default Calendar;
