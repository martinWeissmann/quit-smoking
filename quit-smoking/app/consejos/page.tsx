import React from 'react';

const Consejos: React.FC = () => {
  const styles = {
    consejosContainer: {
      fontFamily: 'Arial, sans-serif',
      color: '#f49034',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      marginLeft: '0px',
    } as React.CSSProperties,
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
    } as React.CSSProperties,
    consejo: {
      marginTop: '20px',
    } as React.CSSProperties,
    image: {
      margin: '20px auto',
      maxWidth: '100%',
      height: 'auto',
      paddingLeft: '1120px',
      marginTop: '-200px',
    } as React.CSSProperties,
    subtitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#f49034',
    } as React.CSSProperties,
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.5',
      color: '#666',
    } as React.CSSProperties,
  };

  return (
    
    <div style={styles.consejosContainer}>
      <h1 style={styles.title}>Consejos</h1>
      <img src="/OS.png" style={styles.image} />
      <div style={styles.consejo}>
        <h2 style={styles.subtitle}>1. Identifique y Maneje sus Desencadenantes</h2>
        <p style={styles.paragraph}>
          Identifique las situaciones, personas y emociones que le hacen querer fumar y desarrolle estrategias para manejarlas o evitarlas. 
          Reconocer los desencadenantes es crucial para desarrollar un plan efectivo para evitarlos o enfrentarlos sin recurrir al cigarrillo. 
          Esto incluye situaciones de estrés, consumo de alcohol, reuniones sociales donde otros fuman y momentos de aburrimiento. 
          Mantenga un diario donde registre cuándo y por qué fuma, para identificar patrones y desencadenantes. 
          Desarrolle alternativas saludables, como el ejercicio, la meditación o actividades manuales, para reemplazar el hábito de fumar.
        </p>
      </div>
      <div style={styles.consejo}>
        <h2 style={styles.subtitle}>2. Utilice terapias de reemplazo de nicotina (TRN) y medicamentos recetados</h2>
        <p style={styles.paragraph}>
          Considere el uso de productos de reemplazo de nicotina como chicles, parches o inhaladores, y hable con su médico sobre medicamentos recetados como el bupropion o la vareniclina. Las TRN y los medicamentos recetados pueden aliviar los síntomas de abstinencia y reducir los antojos, aumentando las probabilidades de éxito. Estos productos proporcionan una dosis controlada de nicotina para ayudar a su cuerpo a adaptarse a la falta de cigarrillos. Consulte con un profesional de la salud para determinar qué TRN o medicamentos son adecuados para usted. Siga las instrucciones de uso cuidadosamente y monitoree cualquier efecto secundario o reacción adversa.
        </p>
      </div>
      <div style={styles.consejo}>
        <h2 style={styles.subtitle}>3. Busque apoyo profesional y social</h2>
        <p style={styles.paragraph}>
         Consulte a un medico,consejero especializado en cecasion del tabaco o unase a un grupo de apoyo.El apoyo profesional puede proporcionar recursos,asesoramiento personalizado y programas estructurados que aumentan las probabilidades de exito.Ademas,el apoyo social,ya sea de familiares,amigos o grupos de apoyo,puede ofrecer motivacion y un sentido de comunidad.Programe una cita con su medico para discutir su plan de cesasion del tabaco y recibir recomendaciones.Participe en grupos de apoyo en persona o en linea para compartir experiencias y obtener consejos utiles de otros que estan en el mismo proceso.        </p>
      </div>
    </div>
  );
};

export default Consejos;
