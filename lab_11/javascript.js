var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Juveniles ',
            data: [755, 959, 922, 683, 756, 798],
            backgroundColor: [
                '#1c2e4a'
            ]
        },

    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Juveniles charged as adults in Maryland by year ',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The amount of juveniles charged as adults in Maryland began dropping in 2016. But after 2018, numbers have been on the rise. In 2020, 798 juveniles were charged as adults while less than 700 juveniles were charged as adults in 2018.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
