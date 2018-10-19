function drawLine(ctx, startLineX, startLineY, endLineX, endLineY, lineWidths, lineColor) {
	// body...
	ctx.beginPath();
  ctx.moveTo(startLineX, startLineY);
  ctx.lineTo(endLineX, endLineY);
  ctx.lineWidth = lineWidths;
  ctx.strokeStyle = lineColor;
  ctx.stroke();
}
function drawText(ctx, textDraw, x, y, font, color) {
	// body...
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(textDraw, x, y);
}
function drawText_rotate(ctx, textDraw, x, y, font, color, deg) {
  // body...
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.rotate(deg*Math.PI/180);
  drawText(ctx, textDraw, 0, 0, font, color);
  ctx.rotate(-deg*Math.PI/180);
  ctx.translate(-x,-y);
}
function drawRect(ctx, x, y, width, height, color) {
  // body...
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}