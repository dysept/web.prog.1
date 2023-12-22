// let canvas = document.getElementById('scratch_chart');
//   let ctx = canvas.getContext('2d');
//   let gradient = ctx.createLinearGradient(300, 0, 500, 0);
// gradient.addColorStop(0, 'rgb(255, 0, 0)'); // Blue
// gradient.addColorStop(1, 'rgb(255, 0, 0)'); // Cyan

// let gradientFill = ctx.createLinearGradient(100, 0, 500, 0);
// gradientFill.addColorStop(0, 'rgba(255, 124, 255, 0.1)'); // Blue
// gradientFill.addColorStop(1, 'rgba(108, 198, 255, 0.1)'); // Cyan
//   const hoverLine = {
//     id: 'hoverLine',
//     afterDatasetDraw(chart, args, plugins) {
//       const { ctx, tooltip, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart
//       if (tooltip._active.length > 0) {
//         const xCoor = x.getPixelForValue(tooltip.dataPoints[0].dataIndex)
//         const yCoor = y.getPixelForValue(tooltip.dataPoints[0].parsed.y)
//         ctx.save()
//         ctx.beginPath()
//         ctx.lineWidth = 3
//         ctx.strokeStyle = gradient//'rgba(255, 58, 76, 0.1)'
//         ctx.moveTo(xCoor, yCoor)
//         ctx.lineTo(xCoor, bottom)
//         ctx.stroke()
//         ctx.closePath()
//       }
//     }
//   }

//   let linechart2 = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: ["","S", "M", "T", "W", "T", "F"],
//       datasets: [{
//         data: [25, 20, 23, 18, 32, 26, 22],
//         fill: true,
//         cubicInterpolationMode: 'monotone',
//         pointStyle: false,
//         backgroundColor: gradientFill,
//         borderColor: gradient,
//         tension: 0,
//       }]
//     },
//     options: {
//       scales: {
//         x: {
//           grid: {
//             display: false,
//             color: 'black',
//             borderColor: 'black',
//           },
//           ticks: {
//             backdropPadding: 10
//           }
//         },
//         y: {
//           min: 0,
//           max: 500,
//           ticks: {
//             stepSize: 100,
//             backdropPadding: 20
//           },
//           grid: {
//             padding: 50,
//             color: '#fffff',
//             borderWidth: 0,
//             borderDash: [5]
//           }
//         },
//       },
//       plugins: {
//         legend: false,
//       },
//       layout: {
//         padding: 15
//       }
//     },
//     plugins: [hoverLine]
//   });

new Chart(
    document.getElementById("scratch_chart"),
    {
        type : 'line',
        data : {
            labels : [ 10, 20, 30, 10,40,
                     ],
            datasets : [
                    {
                        data : [ 186, 205, 1321, 1516,
                                2107, 2191, 3133, 3221,
                                4783, 5478 ],
                        label : "Previouth month",
                        borderColor : "#FF0000",
                        fill : false
                    },
                    // {
                    //     data : [ 1282, 1350, 2411,
                    //             2502, 2635, 2809, 3947,
                    //             4402, 3700, 5267 ],
                    //     label : "This month",
                    //     borderColor : "#0099FF",
                    //     fill : false
                    // }
                 ]
        },
        options : {
            title : {
                display : true,
                text : 'Chart JS Gridlines - Line Chart Example'
            },
            scales : {
                x : {
                    grid : {
                        display : true,
                        color: "#666666",
                        lineWidth: 2
                    }
                },
                y : {
                    grid : {
                        display : true,
                        color: "#666666"
                    }
                }
            }
        }
    });