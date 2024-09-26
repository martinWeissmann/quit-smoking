import React from 'react';

const DoctorProfile: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Página de médicos especializados
      </h1>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        En QS sabemos que el proceso de dejar de fumar es complicado y que puede
        llegar a requerir de ayuda médica profesional, por lo que dejamos el
        contacto de los mejores neumonólogos que hay.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <img
          src="/martin.png" // Coloca aquí la URL de la imagen del médico
          alt="Dr. Martín Masdeu"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '15px',
          }}
        />
        <div>
          <h2 style={{ fontSize: '18px', margin: '0' }}>Dr. Martín Masdeu</h2>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            Contacto:{' '}
            <a href="tel:0111550942107" style={{ color: '#007bff' }}>
              011 15-5094-2107
            </a>
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            Página con información:{' '}
            <a
              href="https://www.doctoraliar.com/martin-masdeu/neumonologo/capital-federal#profile-pricing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff' }}
            >
              Doctoralia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
