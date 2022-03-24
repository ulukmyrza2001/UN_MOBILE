// Code goes here

var randomScalingFactor = function(){ return Math.round(Math.random()*256)};
    var chartData = [
      {
					label: "1",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "2",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "3",
					fillColor : "rgba(151,187,105,0.2)",
					strokeColor : "rgba(151,187,105,1)",
					pointColor : "rgba(151,187,105,1)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "4",
					fillColor : "rgba(151,200,205,0.2)",
					strokeColor : "rgba(151,200,205,1)",
					pointColor : "rgba(151,200,205,1)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "5",
					fillColor : "rgba(200,187,205,0.2)",
					strokeColor : "rgba(200,187,205,1)",
					pointColor : "rgba(200,187,205,1)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
      ]
		var lineChartData = {
			labels : ["8 A.M","9 A.M","10 A.M","11 A.M","12 A.M","1 P.M","2 P.M","3 P.M","4 P.M","5 P.M","6 P.M","7 P.M","8 P.M"],
			datasets : [
				{
					label: "Hourly dataset",
					fillColor : "rgba(200,187,205,0.2)",
					strokeColor : "rgba(200,187,205,1)",
					pointColor : "rgba(200,187,205,1)",
					pointStrokeColor : "#fff", 
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		};
		
		

	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx);
		myLine.Line(lineChartData, {
			responsive: true
		});
		
	}
	
	$(document).ready(function(){
	  $('input[type=checkbox]').click(function(){
	    console.log($(this).val())
	    lineChartData.datasets = [];
	    $('input:checked').each(function(){
	      lineChartData.datasets.push(chartData[$(this).val()]);
	    });
	    
	    myLine.Line(lineChartData, {
			  responsive: true
		  });
		  
	  })
	});
