import {React, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {

    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Strain vs Time',
      },
    },
};

const labels = ['0s', '5s', '10s', '15s', '20s', '25s', '30s'];

const data = {
  labels,
  datasets: [
    {
      label: 'Strain-Front',
      data: labels.map((i) => (Math.random() * 1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Strain-Center',
      data: labels.map((i) => (Math.random() * 1000)),
      borderColor: 'rgb(239, 228, 105)',
      backgroundColor: 'rgba(239, 228, 105, 0.5)',
    },
    {
      label: 'Strain-Back',
      data: labels.map((i) => (Math.random() * 1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function StrainChart() {


    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )

}