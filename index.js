const canvas = document.getElementById("canvas");

function draw() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

    if (canvas.getContext) {
      	const ctx = canvas.getContext("2d");

      	let atmosphereColor = "orange";
      	let sunColor = "white";
      	let terrainColor = "red";
      	let foregroundColor = "black";

      	renderBackground(ctx, atmosphereColor, sunColor);
      	renderLayer3(ctx, atmosphereColor, terrainColor);
      	renderLayer2(ctx, atmosphereColor, terrainColor, foregroundColor);
      	renderLayer1(ctx, atmosphereColor, terrainColor, foregroundColor);
      	renderForeground(ctx, terrainColor, foregroundColor);
    }
}	

function renderBackground(ctx, atmosphereColor, sunColor) {
	const heightAdjustment = canvas.height - 7 * (canvas.height / 10);
	const grd = ctx.createLinearGradient(0, 0, 0, heightAdjustment);
	grd.addColorStop(0, atmosphereColor);
	grd.addColorStop(1, sunColor);
	ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
	ctx.arc(canvas.width / 2, heightAdjustment, 50, 0, 2 * Math.PI);
	ctx.fillStyle = sunColor;
	ctx.fill();

}

function renderLayer3(ctx, atmosphereColor, terrainColor) {
	let topColor = new Color(atmosphereColor);
	let topColor2 = new Color(terrainColor);
	let topGradient = topColor.range(topColor2);

	let bottomColor = new Color(terrainColor);
	let bottomColor2 = new Color(atmosphereColor);
	let bottomGradient = bottomColor.range(bottomColor2);

	const heightAdjustment = canvas.height - 7 * (canvas.height / 10);
	const grd = ctx.createLinearGradient(0, heightAdjustment, 0, 0);
	grd.addColorStop(0, topGradient(0.5));
	grd.addColorStop(1, bottomGradient(0.8));
	ctx.fillStyle = grd;
    ctx.fillRect(0, heightAdjustment, canvas.width, heightAdjustment);
}

function renderLayer2(ctx, atmosphereColor, terrainColor, foregroundColor) {
	let color = new Color(atmosphereColor);
	let color2 = new Color(foregroundColor);
	let gradient = color.range(color2);

	let topColor = new Color(gradient(0.5));
	let topColor2 = new Color(terrainColor);
	let topGradient = topColor.range(topColor2);

	let bottomColor = new Color(terrainColor);
	let bottomColor2 = new Color(atmosphereColor);
	let bottomGradient = bottomColor.range(bottomColor2);

	const heightAdjustment = canvas.height - 6 * (canvas.height / 10);
	const grd = ctx.createLinearGradient(0, heightAdjustment, 0, 0);
	grd.addColorStop(0, topGradient(0.5));
	grd.addColorStop(1, bottomGradient(0.4));
	ctx.fillStyle = grd;
    ctx.fillRect(0, heightAdjustment, canvas.width, heightAdjustment);
}

function renderLayer1(ctx, atmosphereColor, terrainColor, foregroundColor) {
	let color = new Color(terrainColor);
	let color2 = new Color(foregroundColor);
	let gradient = color.range(color2);

	let topColor = new Color(terrainColor);
	let topColor2 = new Color(gradient(0.9));
	let topGradient = topColor.range(topColor2);

	let bottomColor = new Color(topGradient(.5));
	let bottomColor2 = new Color(atmosphereColor);
	let bottomGradient = bottomColor.range(bottomColor2);

	const heightAdjustment = canvas.height - 4 * (canvas.height / 10);
	const grd = ctx.createLinearGradient(0, heightAdjustment, 0, 0);
	grd.addColorStop(0, topGradient(0.5));
	grd.addColorStop(1, bottomGradient(0.2));
	ctx.fillStyle = grd;
    ctx.fillRect(0, heightAdjustment, canvas.width, heightAdjustment);
}

function renderForeground(ctx, terrainColor, foregroundColor) {
	let color = new Color(terrainColor);
	let color2 = new Color(foregroundColor);
	let gradient = color.range(color2);

	const heightAdjustment = canvas.height - (canvas.height / 10);
	ctx.fillStyle = gradient(0.9);
    ctx.fillRect(0, heightAdjustment, canvas.width, heightAdjustment);
}

draw();			