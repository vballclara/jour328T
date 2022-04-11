var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1800', '1825', '1850','1875', '1900', '1925', '1950', '1975', '2000'],
        datasets: [{
                label: 'China',
                data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03],
                fill: false,
                backgroundColor: 'r#00b159',
                borderColor: 'r#00b159'
        },
        {
          label: '# of Oranges',
          data: [22, 10, 23, 6, 22, 13],
          fill: true,
          borderColor: 'rgba(255, 165, 0)',
          backgroundColor: 'rgba(255, 165, 0, 0.1)',
          tension: 0.1}
        }
    ]
    },
    options: {
           responsive: true,
           indexAxis: 'y',
           plugins: {
             title: {
               display: true,
               text: 'Apples and Oranges by year',
               font: {
                 size: 18
               }
             },
             subtitle: {
               display: true,
               text: 'For all but one year, oranges outnumbered apples.'
             }
           },
           scales: {
                 y: {
                  beginAtZero: true,
              },
           },
    },
});
