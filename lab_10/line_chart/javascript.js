var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800', '1825', '1850', '1875', '1900', '1925', '1950', '1975', '2000',],
        datasets: [{
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44],
            fill: false,
            borderColor: 'rgba(0, 151, 57)',
            backgroundColor: 'rgba(0, 151, 57, 0.1)',
            tension: 0.1},
        {
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03],
            fill: false,
            borderColor: 'rgba(	255, 255, 0)',
            backgroundColor: 'rgba(	255, 255, 0, 0.1)',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34],
            fill: false,
            borderColor: 'rgba(255, 153, 51)',
            backgroundColor: 'rgba(255, 153, 51, 0.1)',
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27],
            fill: false,
            borderColor: 'rgba(238, 28, 37)',
            backgroundColor: 'rgba(238, 28, 37, 0.1)',
            tension: 0.1},
        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9],
            fill: false,
            borderColor: 'rgba(10, 49, 97)',
            backgroundColor: 'rgba(10, 49, 97, 0.1)',
            tension: 0.1},
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Life expectancy in the largest countries',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Between 1800 and 2000, the United States had the highest life expectancy out of the five countries. China, Brazil and Indonesia were all very close until 1925, where Brazil claimed higher life expectancy. India has remained with the lowest life expectancy over the course of 200 years.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});
