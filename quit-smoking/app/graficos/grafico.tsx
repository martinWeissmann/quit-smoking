import React from 'react';

const App: React.FC = () => {
  const data = [
    { label: 'Semana 1', value: 48 },
    { label: 'Semana 2', value: 36 },
    { label: 'Semana 3', value: 24 },
    { label: 'Semana 4', value: 12 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h2>Seguimiento de cantidades semanales</h2>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '200px' }}>
        {data.map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                width: '50px',
                backgroundColor: '#d3d3d3',
                borderTop: '2px solid #FF6600',
              }}
            ></div>
            <p style={{ marginTop: '5px' }}>{item.label}</p>
          </div>
        ))}
      </div>
      <p style={{ color: '#FF6600', fontWeight: 'bold' }}>Cigarrillos fumados por semana</p>
    </div>
  );
};

export default App;
