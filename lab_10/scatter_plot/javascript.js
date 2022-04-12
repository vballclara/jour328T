var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#001219",
                backgroundColor: "rgb(0, 18, 25, 0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                label: "Pakistan",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
              }
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Y axis title'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'X axis title'
                  }
              }
            }
          }
        });
