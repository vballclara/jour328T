var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East and North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average of GDP per Capita',
            data: [18791.13, 14480.3, 20818.45, 13856, 2505.17, 2569],
            backgroundColor: [
                '#607d3b'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Average GDP per Capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe and Central Asia have the highest average GDP per capita.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
