
const PI = Math.PI;
const scaleX = 1;
const scaleY = 0.5;
var pie_chart = $("#js-pie_chart").get(0);
var pieX = Math.floor(pie_chart.width/2);
var pieY = Math.floor(pie_chart.height*1.3);
var pieR = Math.floor(pie_chart.width/5);
var pieZ = Math.floor(pie_chart.height/3);
var pieStartAngle = 0;

function drawSlidePie(ctx, centerX, 
  centerY, radius, startAngle, endAngle, fillColor, strokeColor) {
  // Draw slide pie chart
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX,centerY,radius,startAngle,endAngle);
    ctx.lineTo(centerX,centerY);
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
}

function drawLineComment(ctx, texts, val, startAngle, endAngle, lineColor, textColor, left) {
  // draw line comment
  var startLineX = pieX + (pieR/2)*Math.cos(startAngle + endAngle/2);
  var startLineY = pieY-pieZ + (pieR/2)*Math.sin(startAngle + endAngle/2);
  var midLineX = pieX + left*pieR;
  var midLineY = startLineY - pieZ;;
  var endLineX = midLineX + left*pieR;
  var endLineY = startLineY - pieZ;
  var textX = midLineX;
  var textY = endLineY - pieZ/3;
  if( left < 0) {
    textX = endLineX;
  }
  var lableText = ""+val + "% " + texts+"";
  ctx.beginPath();
  ctx.moveTo(startLineX, startLineY);
  ctx.lineTo(midLineX, midLineY);
  ctx.lineTo(endLineX, endLineY);
  ctx.lineWidth = 3;
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = textColor;
  ctx.font = "11px Arial";
  ctx.fillText(lableText, textX, textY);
  ctx.stroke();
}
function drawTitle(ctx, titleTxt, textX, textY, titleColor) {
  // draw title
  ctx.beginPath();
  ctx.fillStyle = titleColor;
  ctx.font = "14px Arial";
  ctx.fillText(titleTxt, textX, textY);
}
function pieChart(options) {
  // pie chart
  var pixel =  window.devicePixelRatio || 1;
  this.options = options;
  this.canvas = options.canvas;
  this.canvas.style.width = this.width + 'px';
  this.canvas.style.height = this.height + 'px';
  this.canvas.width *= pixel;
  this.canvas.height *= pixel;
  this.ctx = this.canvas.getContext("2d");
  this.ctx.setTransform(pixel,0,0,pixel,0,0);
  this.ctx.scale(1,0.45);
  var total_value = 0;
  for ( var item in this.options.data){
    var val = this.options.data[item];
    total_value += val;
  }
  console.log(total_value);
  var startAngle_reached = pieStartAngle;
  var endAngle_reached = (dataPie.reached/total_value)*(2*PI);
  var startAngle_notReached = endAngle_reached;
  var endAngle_notReached = startAngle_notReached+((dataPie.notReached/total_value)*(2*PI));
  for (var i = 0; i <= pieZ; i++) {
    drawSlidePie(this.ctx, pieX, pieY-[i], pieR, startAngle_reached, endAngle_reached, colorPie.reached, colorPie.strokeReached);
    drawSlidePie(this.ctx, pieX, pieY-[i], pieR, startAngle_notReached, endAngle_notReached, colorPie.notReached, colorPie.strokeNotReached);
  }
  var val_reached = Math.ceil(dataPie.reached*100/total_value);
  var val_notReached = Math.floor(dataPie.notReached*100/total_value);
  drawLineComment(this.ctx, textPie.reached, val_reached, startAngle_reached, endAngle_reached, colorPie.lineReached, colorPie.lable, -1);
  if(val_notReached<=20) {
    drawLineComment(this.ctx, textPie.notReached, val_notReached,startAngle_notReached, 2*endAngle_notReached +PI/12, colorPie.lineNotReached, colorPie.lable, 1);
  }
  else {
    if(val_notReached<=5) {
      drawLineComment(this.ctx, textPie.notReached, val_notReached,startAngle_notReached, endAngle_notReached, colorPie.lineNotReached, colorPie.lable, 1);
    }
    else {
      drawLineComment(this.ctx, textPie.notReached, val_notReached,startAngle_notReached, endAngle_notReached - PI, colorPie.lineNotReached, colorPie.lable, 1);
    }
  }
  drawTitle(this.ctx, textPie.title, pieX/10, Math.floor(pieY*1.5), colorPie.title)
}


$(document).ready(function() {
  var myPieChart = new pieChart(
    {
      canvas: pie_chart,
      data: dataPie
    });
  var myColumnChart = new columnChart(
    {
      canvas: column_chart
    });
  myColumnChart.draw();
});