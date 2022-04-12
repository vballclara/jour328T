var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#005F73",
                backgroundColor: "rgb(0, 95, 115, 0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#0A9396",
                backgroundColor:"rgb(10, 147, 150, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#94D2BD",
                backgroundColor:"rgb(148, 210, 189, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#E9D8A6",
                backgroundColor:"rgb(233, 216, 166, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#EE9B00",
                backgroundColor:"rgb(238, 155, 0, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#CA6702",
                backgroundColor:"rgb(202, 103, 2, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#BB3E03",
                backgroundColor:"rgb(187, 62, 3, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#AE2012",
                backgroundColor:"rgb(174, 32, 18, 0.1)",
                borderWidth:2,
              }, {
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#9B2226",
                backgroundColor:"rgb(155, 34, 38, 0.1)",
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
