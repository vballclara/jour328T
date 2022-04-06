var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
                label: '# of Apples',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  '#ff0800'
                ]
        }]
    }
});
