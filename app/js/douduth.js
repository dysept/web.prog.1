window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    
    data: [{
      type: "doughnut",
      startAngle: 60,
      //innerRadius: 60,
      indexLabelFontSize: 0,
      // showInLegend: true,
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 30, label: "Nike",color: "#00B7E0", showInLegend: false },
        { y: 36, label: "Twitter",color:"#82BFFF", showInLegend: false },
        { y: 14, label: "Meta",color:"#548DFF", showInLegend: false },
        { y: 20, label: "Others",color:"#19648C", showInLegend: false},
     
      ]
    }],
    // Add a center label
    axisY: {
      suffix: "%",
      labelFormatter: function () {
        return "100%";
      }
    }
  });
  chart.render();
  
}
