import {React, useState, useEffect} from 'react';
import Button from '../Button/Button';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import "./strainChart.css";
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

const graphsButtonStyle = {
  border: "none",
  textAlign: "left",
  textDecoration: "none",
  background: "none",
  fontFamily: "Roboto Mono",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "17px",
  color: "#2E854F",
  width: "100%",
  cursor: "pointer"
}


export default function StrainChart() {
  const[liveState, setLiveState] = useState(null);
  const[strainFront, setStrainFront] = useState([]);
  const[strainCenter, setStrainCenter] = useState([]);
  const[strainBack, setStrainBack] = useState([]);
  const[count, setCount] = useState(0);   //ISSUE COUNT NUNCA QUISO AUMENTAR
  const[labels, setlabels] = useState(['0', '5', '10', '15', '20', '25', '30']);  //DEBERIA EMPEZAR VACIO
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

  const labelMaker = (num) => {
    if(num === 0){
      setlabels((labels) => ['0']);
    }else if(num === 1){
      setlabels((labels) => ['0', '5']);
    }else if(num === 2){
      setlabels((labels) => ['0', '5', '10']);
    }else if(num === 3){
      setlabels((labels) => ['0', '5', '10', '15']);
    }else if(num === 4){
      setlabels((labels) => ['0', '5', '10', '15', '20']);
    }else if(num === 5){
      setlabels((labels) => ['0', '5', '10', '15', '20', '25']);
    }else if(num === 6){
      setlabels((labels) => ['0', '5', '10', '15', '20', '25', '30']);
    }else if(num === 7){
      setlabels((labels) => ['0', '5', '10', '15', '20', '25', '30']);
    }else if(num > 7){
      setlabels((labels) => labels.map((i) => parseInt(i) + 5));
    }
  }
  console.log(labels);
  const chart = () => {
    labelMaker(num);
    // setCount(count + 1);

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
      // console.log(res);
      

      setStrainFront(labels.map((i) => (Math.random() * 1000)));
      setStrainCenter(labels.map((i) => (Math.random() * 1000)));
      setStrainBack(labels.map((i) => (Math.random() * 1000)))
    })
    .catch(err => {
      console.log(err)
    })

  };

  
  const graphStart = () => {    
    setLiveState(setInterval(() => {
      console.log(num);
      num = num+1;
      chart();
    }, 2000))
    return () => clearInterval(liveState);
  }

  const graphStop = () => {
    clearInterval(liveState)
  }

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log(num);
  //     num = num+1;
  //     chart();
  //   }, 2000)
  //   return () => clearInterval(intervalID);
  // }, [])

  // console.log(strainFront);

  return (
      <div class='s-chart'>
          <Line options={options} data={data} />
          <div class='chart-buttons'>
            <Button style={graphsButtonStyle} text={'start'} callback={graphStart} />
            <Button style={graphsButtonStyle} text={'stop'} callback={graphStop} />
          </div>
      </div>
  )

}