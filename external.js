// ---------- PAGE 1: HOME & TARGETS ----------
function randomTarget() {
	var r;
	r = Math.floor(Math.random() * 10);

	var page = document.getElementById("demo");
	page.innerHTML = "Random SDG 9 Priority Score: " + r + " / 10";
	page.style.color = "#FFFFFF";

	if (r < 5) {
		page.style.backgroundColor = "#FF5600";
	} else {
		page.style.backgroundColor = "#111827";
	}
}

function changeCas() {
	var x = document.getElementById("menu");
	x.className = "list showList";
	x.style.color = "#FF5600";
	x.style.fontFamily = "Arial";
	x.style.fontSize = "larger";
}

function hide() {
	document.getElementById("menu").className = "list hideList";
}

// ---------- WHOLE-WEBSITE NIGHT MODE, BIGGER TEXT & RESET ----------
function bigtext() {
	document.getElementById("newsText").style.fontSize = "26px";
}

function nightMode() {
	document.getElementById("pageBody").className = "night";
}

function reset() {
	document.getElementById("pageBody").className = "";
	document.getElementById("newsText").style.fontSize = "";
}

// ---------- PAGE 2: INFRASTRUCTURE ----------
function swap() {
	var img = document.getElementById("img-swap");
	img.setAttribute("src", "smart-grid.png");
	img.setAttribute("alt", "Modernized climate-resilient smart grid");
}

function resetGrid() {
	var img = document.getElementById("img-swap");
	img.setAttribute("src", "aging-grid.png");
	img.setAttribute("alt", "Aging storm-vulnerable power grid");
}

function checkConnectivity() {
	let speed = parseInt(prompt("Enter your current rural internet speed in Mbps", "25"));
	let towns = parseInt(prompt("Enter number of unconnected villages in your county", "12"));
	var box = document.getElementById("demo");
	box.style.color = "#FFFFFF";

	if ((speed < 30) && (towns > 5)) {
		box.innerHTML = "Priority Target 9.c Grant Approved! Speed (" + speed + " Mbps) qualifies for Satellite Rural Broadband.";
		box.style.backgroundColor = "#111827";
	} else {
		box.innerHTML = "Standard Grid Tier: " + speed + " Mbps across " + towns + " villages.";
		box.style.backgroundColor = "#FF5600";
	}
}

// ---------- PAGE 3: INDUSTRY ----------
function retrofitCalculator() {
	let want = prompt("Would you like to calculate factory retrofit savings? (yes/no)", "yes");
	var box = document.getElementById("demo");

	if (want === "yes") {
		let sp = parseInt("15");
		let hp = parseInt("10");
		let ep = parseFloat("12.5");

		let sq = parseInt(prompt("Number of Solar Roofing panels (15 tons CO2 saved each)", "4"));
		let hq = parseInt(prompt("Number of Heat Recovery units (10 tons CO2 saved each)", "2"));
		let eq = parseInt(prompt("Number of Electric Logistics trucks (12.5 tons CO2 saved each)", "3"));

		let sc = sp * sq;
		let hc = hp * hq;
		let ec = ep * eq;
		let total = sc + hc + ec;

		alert("Solar Roofing CO2 saved = " + sc + " tons");
		alert("Heat Recovery CO2 saved = " + hc + " tons");
		alert("Electric Fleet CO2 saved = " + ec + " tons");

		box.innerHTML = "Total Factory Retrofit Savings: " + total + " tons of CO2 per year!";
		box.style.color = "#FFFFFF";

		if (total >= 100) {
			box.style.backgroundColor = "#111827";
		} else {
			box.style.backgroundColor = "#FF5600";
		}
	} else {
		console.log("Maybe next time!");
		box.innerHTML = "Calculator skipped. Click the button when you are ready!";
	}
}

// ---------- PAGE 4: INNOVATION ----------
function budgetAllocator() {
	let rd = parseInt(prompt("Enter 2030 Budget (1-50) for R&D Labs & Green Steel", "35"));
	let rural5g = parseInt(prompt("Enter 2030 Budget (1-50) for Rural 5G & Clean-Tech Grants", "40"));
	let score = rd + rural5g;

	var box = document.getElementById("demo");
	box.style.color = "#FFFFFF";

	if ((score >= 70) && (rd >= 30)) {
		box.innerHTML = "2030 Readiness Score: " + score + "/100 - High Innovation Readiness!";
		box.style.backgroundColor = "#111827";
	} else {
		box.innerHTML = "2030 Readiness Score: " + score + "/100 - More R&D funding needed.";
		box.style.backgroundColor = "#FF5600";
	}
}

function techTransferLoop() {
	let ans = "y";
	let count = 0;
	while (ans == "y") {
		count++;
		ans = prompt("Grant #" + count + " sent to a developing nation! Enter y to fund another grant", "n");
	}
	alert("Thank you! You funded " + count + " clean-tech transfer grants.");
}
