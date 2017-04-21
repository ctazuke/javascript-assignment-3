// Do your work in this file.

// Create a `div` element with a class name of "**view**" and append it to the document `body`.
var divView = document.createElement("div");
divView.className = "view";
document.body.appendChild(divView);

// Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.
var divGrass = document.createElement("div");
divGrass.className = "grass";
divView.appendChild(divGrass);

// Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.
var divSun = document.createElement("div");
divSun.className = "sun";
divView.appendChild(divSun);

// Write a [`while`] loop to create 5 divs. 
// The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", and "**ray-5**". 
// Append each of these divs to the previously created "sun" div from step 5.
var i = 1;
while (i < 6) {
  var divRay = "divRay" + i;
  var ray = "ray-" + i;
  divRay = document.createElement("div");
  divRay.className = ray;
  divSun.appendChild(divRay);
  i++;
}

// Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.
var divMountain = document.createElement("div");
divMountain.className = "mountain";
divView.appendChild(divMountain);

// Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.
var divMountainTop = document.createElement("div");
divMountainTop.className = "mountain-top";
divMountain.appendChild(divMountainTop);

// Write a [`do...while`] loop to create 3 divs. 
// The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", and "**mountain-cap-3**". 
// Append each of these divs to the previously created "mountain-top" div from step 8.
var j = 1;
do {
  var divMountainCap = "divMountainCap" + j;
  var mountainCap = "mountain-cap-" + j;
  divMountainCap = document.createElement("div");
  divMountainCap.className = mountainCap;
  divMountainTop.appendChild(divMountainCap);
  j++;
} while (j < 4)

