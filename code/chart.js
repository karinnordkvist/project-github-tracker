//"Draw" the chart here 👇
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Another month',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(100, 5, 100)'],
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('chart'),
    config
  );