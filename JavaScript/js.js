<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  var ctx = document.getElementById('consumption-chart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Consumption',
        data: [10, 15, 12, 8, 9, 11, 14, 13, 16, 18, 20, 22],
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


