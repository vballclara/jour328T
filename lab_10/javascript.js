var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East and North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average of GDP per Capita',
            data: [18791.13, 14480.3, 20818.45, 13856, 2505.17, 2569],
            backgroundColor: [
                '#ff0800'
            ]
        },
        {
            label: '# of Oranges',
            data: [22, 10, 23, 6, 22, 13],
            backgroundColor: [
                '#FFA500'
            ],
        }
    ]
    },
    options: {
        responsive: true,
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
