import {React, useState, useEffect} from 'react';
import axios from 'axios';
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

// const labels = ['0s', '5s', '10s', '15s', '20s', '25s', '30s'];



export default function StrainChart() {
  const[strainFront, setStrainFront] = useState([]);
  const[strainCenter, setStrainCenter] = useState([]);
  const[strainBack, setStrainBack] = useState([]);
  const[count, setCount] = useState(0);   //ISSUE COUNT NUNCA QUISO AUMENTAR
  const[labels, setLabels] = useState(['0', '5', '10', '15', '20', '25', '30']);  //DEBERIA EMPEZAR VACIO
  let num = 0;   //PLACEHOLDER DE COUNT

  const data = {
    labels,
    datasets: [
      {
        label: 'Strain-Front',
        data: strainFront,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Strain-Center',
        data: strainCenter,
        borderColor: 'rgb(239, 228, 105)',
        backgroundColor: 'rgba(239, 228, 105, 0.5)',
      },
      {
        label: 'Strain-Back',
        data: strainBack,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const labelMaker = () => {
    if(num === 0){
      setLabels((labels) => ['0']);
    }else if(num === 1){
      setLabels((labels) => ['0', '5']);
    }else if(num === 2){
      setLabels((labels) => ['0', '5', '10']);
    }else if(num === 3){
      setLabels((labels) => ['0', '5', '10', '15']);
    }else if(num === 4){
      setLabels((labels) => ['0', '5', '10', '15', '20']);
    }else if(num === 5){
      setLabels((labels) => ['0', '5', '10', '15', '20', '25']);
    }else if(num === 6){
      setLabels((labels) => ['0', '5', '10', '15', '20', '25', '30']);
    }else if(num === 7){
      setLabels((labels) => ['0', '5', '10', '15', '20', '25', '30']);
    }else if(num > 7){
      setLabels((labels) => labels.map((i) => parseInt(i) + 5));
    }
  }

  const chart = () => {
    labelMaker();
    // setCount(count + 1);


    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
      console.log(res);
  
      setStrainFront(labels.map((i) => (Math.random() * 1000)));
      setStrainCenter(labels.map((i) => (Math.random() * 1000)));
      setStrainBack(labels.map((i) => (Math.random() * 1000)))
    })
    .catch(err => {
      console.log(err)
    })

  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log(num);
      num = num+1;
      chart();
    }, 2000)
    return () => clearInterval(intervalID);
  }, [])

  console.log(strainFront);

  return (
      <div>
          <Line options={options} data={data} />
      </div>
  )

}