import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChartExample = (props) => {
  const chartRef = useRef();
  const chartObjRef = useRef();

  const createDoughnutChart = (el) => {
    const data = {
      labels: ["Red", "Blue", "Yellow","Green"],
      datasets: [
        {
          label: [
            "My First dataset",
            
            
          ],
          
          data: [300, 50, 100,80],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(0, 255, 0)"
          ],
          hoverOffset: 4,
        },
      ],
    };
    const config = {
      type: "doughnut",
      data,
      responsive: true,
    };
    chartObjRef.current = new Chart(el, config);
  };

  useEffect(() => {
    const el = chartRef.current;
    if (chartObjRef.current) chartObjRef.current.destroy();
    createDoughnutChart(el);

    return () => chartObjRef.current.destroy();
  }, []);

  return (
    <div
      class="chart-container"
      style={{
        position: "relative", 
        height: "200px", 
        width: "200px"
    }}
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DoughnutChartExample;
