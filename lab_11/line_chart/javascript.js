var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '8-year-olds',
            data: [1, 4, 0, 0, 0, 0],
            fill: true,
            borderColor: 'rgba(255, 165, 0)',
            tension: 0.1},
        {
            label: '9-year-olds',
            data: [0, 0, 0, 0, 0, 0],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},
        {
            label: '10-year-olds',
            data: [0, 0, 1, 0, 2, 0],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},
        {
            label: '11-year-olds',
            data: [0, 2, 1, 0, 1, 2],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},
        {
            label: '12-year-olds',
            data: [1, 0, 2, 1, 1, 0],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},
        {
            label: '13-year-olds',
            data: [1, 1, 6, 0, 2, 1],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},
        {
            label: '14-year-olds',
            data: [10, 4, 8, 4, 8, 3],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},
        {
            label: '15-year-olds',
            data: [22, 12, 19, 37, 32, 21],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},

        {
            label: '16-year-olds',
            data: [244, 193, 202, 356, 377, 283],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},

        {
            label: '17-year-olds',
            data: [519, 540, 444, 524, 526, 446],
            fill: true,
            borderColor: 'rgba(0, 0, 0)',
            tension: 0.1},

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
                beginAtZero: true,
            }
        },
    },
});
