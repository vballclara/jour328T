var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Juveniles ',
            data: [755, 959, 922, 683, 756, 798],
            backgroundColor: [
                '#ff0800'
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
                text: 'For all but one year, oranges outnumbered apples'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
