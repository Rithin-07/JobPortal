// import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './CSS/AdminDashboard.css'; // Import the CSS file

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CourseChart = () => {
  const data = {
    labels: ['Computer Science', 'Mathematics', 'English', 'Economics', 'Biology'],
    datasets: [
      {
        label: 'Courses Distribution',
        data: [25, 20, 15, 20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Course Distribution',
      },
    },
  };

  return (
    <div className="chart-container">
      <center>
      <Pie data={data} options={options} />
      </center>
    </div>
  );
};

export default CourseChart;
