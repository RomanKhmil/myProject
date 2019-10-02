//var ctx = $('#myChart');
var sctx = $('#secondChart');
var ctx = document.getElementById('myChart').getContext("2d");
var sctx = document.getElementById('secondChart').getContext("2d");
var gradientFill = ctx.createLinearGradient(0, 500, 0, 100);
gradientFill.addColorStop(0, "rgba(198, 32, 186, 0.8");
gradientFill.addColorStop(1, "rgba(253, 179, 38, 0.8)");
var gradientFill2 = ctx.createLinearGradient(0, 500, 0, 100);
gradientFill2.addColorStop(0, "rgba(39, 126, 204, 0.8)");
gradientFill2.addColorStop(1, "rgba(0, 222, 255, 0.8)");



function randarr() {
    var a = 50;
    var arr = [];
    for (i = 0; i < 31; i++) {
        arr.push(a + Math.round(10 * Math.random()));
    }
    return arr;
}
console.log(randarr());
var set_data = function(arr, type) {
    let data = {
        labels: [],
        datasets: [{
            label: 'test',
            data: [],
            backgroundColor: 'rgba(84,166,222,1)'
        }]
    };
    if (type == 1) {
        for (i = 1; i <= 31 && i <= arr.length; i++) {
            data.datasets[0].data.push(arr[i - 1]);
            data.labels.push(i.toString());
        }
        console.log(data);
        return data;
    }

}

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '1', '1', '1', '1', '1', '1'],
        datasets: [{
                label: 'hello',
                data: [6, 7, 5, 6, 4, 7, 5],
                backgroundColor: gradientFill
            },
            {
                label: 'world',
                data: [5, 4, 5, 3, 4, 2, 5],
                backgroundColor: gradientFill2
            }
        ],

    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }]
        }
    }

});
var secondChart = new Chart(sctx, {
    type: 'bar',
    /*  data: {
        labels: ["0", "1", "2", "3", "4","5","6","7","8"],
        datasets: [{
          label: 'hello',
          data: [115,1,140,100,40,10,40,25,20],
          backgroundColor: 'rgba(30,30,200,1)'
        }]
      },*/

    data: set_data(randarr(), 1),
    options: {
        hover: {
            backgroundColor: 'rgba(0,0,0,1)'
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    display: false,
                    backdropColor: 'rgba(255,255,255,0)'
                }
            }],
            xAxes: [{
                barPercantage: 1.0,
                categoryPercentage: 0.8,
                gridLines: {
                    display: false
                },
                ticks: {
                    //display: false
                }
            }]
        }
    }
});