
var column_chart = $("#js-column_chart").get(0);
var Ox = Math.floor(column_chart.width/6.2);
var Oy = Math.floor(column_chart.height*0.69);
var lenghtOX = Math.floor(column_chart.width/1.6);
var lenghtOY = Math.floor(column_chart.height/2);
var num_lever = columnChartSets.Oy_value.length-1;
var num_column = columnChartSets.data.length;
var columnWidth = lenghtOX/(1.5*num_column);
var distance_lever = lenghtOY/num_lever;
var distance_column = columnWidth/2;
var font = "7.5px Arial";
function draw_columnChartTitle(ctx) {
	// draw title text
	drawText(ctx, columnChartSets.title, Ox, Oy - (num_lever+0.5)*distance_lever, "both 15px Arial", columnChartSets.tilteColor);
}
function draw_columnChartLine(ctx, num_column) {
	// draw lines for column chart
	// drawLine(ctx, Ox, Oy, Ox+lenghtOX, Oy, 1, columnChartSets.Ox_color);
  var lineX_y = -distance_lever;
  for (var i = 0; i <= num_lever; i++) {
    lineX_y += distance_lever;
  	drawLine(ctx, Ox, Oy-lineX_y, Ox+lenghtOX, Oy-lineX_y, 1, columnChartSets.strokeColor);
  }
  drawLine(ctx, Ox, Oy, Ox+lenghtOX, Oy, 1, columnChartSets.Ox_color);
}
function draw_nameOxy(ctx) {
	// draw the name's Oxy for column chart
  drawText_rotate(ctx, columnChartSets.Oy_name, Ox-Ox/3, Oy, font, columnChartSets.nameColor, -90);
  drawText(ctx, columnChartSets.Ox_name, Ox+lenghtOX/2.5, Oy+Oy/4, font, columnChartSets.nameColor);
}
function draw_valueOxy(ctx) {
  // draw value Ox, Oy
  var valueOy_y = -distance_lever;
  var valueOy_x = Ox-Ox/6;
  var valueOx_x = -distance_column*2.3;
  var valueOx_y = Oy+Oy/10;
  for (var item in columnChartSets.Oy_value){
    valueOy_y += distance_lever;
    drawText(ctx, item, valueOy_x, Oy-valueOy_y+2, font, columnChartSets.valueColor);
  }
  for(var i = 0; i< num_column; i++) {
    valueOx_x += distance_column+columnWidth;
    drawText(ctx, columnChartSets.data[i].name, Ox+valueOx_x, valueOx_y, font, columnChartSets.valueColor);
  }
}
function draw_colomnChartExplication(ctx) {
  // draw explication for column chart
  var explication_x = Ox + lenghtOX + Ox/5;
  var explication_y = Oy - num_lever*distance_lever;
  var lineHeigth = columnWidth/2;
  drawRect(ctx, explication_x, explication_y, columnWidth, columnWidth/2.5, columnChartSets.columnColor);
  var explicationText = columnChartSets.Oy_name.split(' ');
  for (var i = 2; i <= explicationText.length + 1; i++) {
    drawText(ctx, explicationText[i-2], explication_x, explication_y + i*lineHeigth, font, columnChartSets.valueColor)
  }
}
function darw_columnChartLable(ctx) {
	// draw the lable for column chart
  draw_columnChartTitle(ctx);
  draw_columnChartLine(ctx);
  draw_nameOxy(ctx);
  draw_valueOxy(ctx);
  draw_colomnChartExplication(ctx);
}
function draw_chart(ctx) {
  // draw column chart data
  var chart_x = Ox;
  var chart_y = Oy;
  var nextChart = distance_column*3;
  var columnHeight = 0;
  for (var i = 0; i < num_column; i++) {
    chart_x = Ox + i*nextChart;
    columnHeight = -columnChartSets.data[i].value*distance_lever;
    if(columnHeight>0) {
      columnHeight = 0;
    }
    if(columnHeight < -4*distance_lever ){
      columnHeight = -4*distance_lever;
    }
    drawRect(ctx, chart_x, chart_y, columnWidth, columnHeight,columnChartSets.columnColor);
  }
}
function columnChart(options) {
	// body...
  var pixel =  window.devicePixelRatio || 1;
  this.options = options;
  this.canvas = options.canvas;
  this.canvas.style.width = this.width + 'px';
  this.canvas.style.height = this.height + 'px';
  this.canvas.width *= pixel;
  this.canvas.height *= pixel;
  this.ctx = this.canvas.getContext("2d");
  this.ctx.setTransform(pixel,0,0,pixel,0,0);
 
	this.draw = function() {
		// draw column chart with data: columnChartSets.data
    darw_columnChartLable(this.ctx);
    draw_chart(this.ctx);
	}  
}
