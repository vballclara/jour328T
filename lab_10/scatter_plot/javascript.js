var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#F94144",
                backgroundColor: "rgb(249, 65, 68, 0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#F3722C",
                backgroundColor:"rgb(248, 150, 30, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#F9844A",
                backgroundColor:"rgb(249, 132, 74, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#F9C74F",
                backgroundColor:"rgb(249, 199, 79, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#90BE6D",
                backgroundColor:"rgb(144, 190, 109, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#43AA8B",
                backgroundColor:"rgb(67, 170, 139, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#4D908E",
                backgroundColor:"rgb(77, 144, 142, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#577590",
                backgroundColor:"rgb(87, 117, 144, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#277DA1",
                backgroundColor:"rgb(39, 125, 161, 0.1)",
                borderWidth:2,
              }
            ]
          },
          options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
            title: {
                display: true,
                text: 'Life expectancy and average GDP',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'There is a loose positive relationship between average GDP in a country and life expectancy. Countries with higher GDPs, like the United States, have a higher life expectancy.'
            }
        },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Life expectancy'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Average GDP'
                  }
              }
            }
          }
        });
