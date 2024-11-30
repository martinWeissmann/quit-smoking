import React from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  weeklyData: number[];
}

const ChartScreen: React.FC<Props> = ({ weeklyData }) => {
  const chartData = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Cigarrillos fumados por semana",
        data: weeklyData,
        backgroundColor: "rgba(244, 131, 37, 0.5)",
        borderColor: "#f48325",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Seguimiento de cantidades semanales" },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seguimiento del progreso</h1>
      <div style={{ marginBottom: "2rem" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
      <Link to="/" style={styles.link}>
        Volver al formulario
      </Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    textAlign: "center",
    color: "#f48325",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "2rem",
  },
  link: {
    color: "#f48325",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default ChartScreen;
