const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");

function updateBG() {
  var character = document.getElementById('character').value;
  var sprite = document.getElementById('sprite').value;

  if(sprite !== "") {
    var background = new Image();
    background.src = `../${character.trim()}/${sprite.trim()}.png`
    background.onload = () => {
      canvas.width = background.width + parseInt(document.getElementById("ESR").value) + parseInt(document.getElementById("ESL").value);
      canvas.height = background.height + parseInt(document.getElementById("ESB").value) + parseInt(document.getElementById("EST").value);
      c.drawImage(background, parseInt(document.getElementById("ESL").value), parseInt(document.getElementById("EST").value));
    }

    console.log(character + " || " + sprite)
    console.log(background.src)
  } else {
    console.log("no image source")
  }
}

//SHOW HIDE
var collisionboxSH = false;
var hurtboxSH = true;
var hitboxSH = true;
var extraSpace = false;

function collSH() {
  switch(collisionboxSH) {
    case true:
      document.getElementById("collisionbox").style.display = "none";
      return collisionboxSH = false;
    case false:
      document.getElementById("collisionbox").style.display = "inline";
      return collisionboxSH = true;
  }
}

function hurtSH() {
  switch(hurtboxSH) {
    case true:
      document.getElementById("hurtbox").style.display = "none";
      return hurtboxSH = false;
    case false:
      document.getElementById("hurtbox").style.display = "inline";
      return hurtboxSH = true;
  }
}

function hitSH() {
  switch(hitboxSH) {
    case true:
      document.getElementById("hitbox").style.display = "none";
      return hitboxSH = false;
    case false:
      document.getElementById("hitbox").style.display = "inline";
      return hitboxSH = true;
  }
}

function exSpace() {
  switch(extraSpace) {
    case true:
      document.getElementById("extraSpace").style.display = "none";
      return extraSpace = false;
    case false:
      document.getElementById("extraSpace").style.display = "inline";
      return extraSpace = true;
  }
}

///CLEAR
function clear() {
  c.beginPath();
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.stroke();

  updateBG();
}

function clearColl() {
  clear();
  setTimeout(() => {
    drawHurt();
    drawHit();
  })
}

function clearHurt() {
  clear();
  setTimeout(() => {
    drawColl();
    drawHit();
  }, 10)
}

function clearHit() {
  clear();
  setTimeout(() => {
    drawColl();
    drawHurt();
  }, 10)
}

///DRAW
function drawRect(colour, width, height, xOffset, yOffset) {
  var cropX = parseInt(document.getElementById("cropX").value);
  var cropY = parseInt(document.getElementById("cropY").value);
  var matrix30 = parseInt(document.getElementById("matrix30").value);
  var matrix31 = parseInt(document.getElementById("matrix31").value);

  c.beginPath();
  c.strokeStyle = colour;
  c.rect(
  cropX - matrix30 - parseInt(width) + parseInt(xOffset) + 1.5 + parseInt(document.getElementById("ESL").value),
  cropY - matrix31 - parseInt(height) + parseInt(yOffset) + 0.5 + parseInt(document.getElementById("EST").value),
  parseInt(width) * 2 - 1,
  parseInt(height) * 2
  )
  c.stroke();
}

/*****************************
*  21 - 27  Collision boxes  *
*  1  - 7   Hurt boxes       *
*  11 - 17  Hit boxes        *
*****************************/

function drawColl() {
  drawRect(
    "#0000ff",
    document.getElementById("w21").value,
    document.getElementById("h21").value,
    document.getElementById("xOffset21").value,
    document.getElementById("yOffset21").value
  )
  drawRect(
    "#0000ff",
    document.getElementById("w22").value,
    document.getElementById("h22").value,
    document.getElementById("xOffset22").value,
    document.getElementById("yOffset22").value
  )
  drawRect(
    "#0000ff",
    document.getElementById("w23").value,
    document.getElementById("h23").value,
    document.getElementById("xOffset23").value,
    document.getElementById("yOffset23").value
  )
  drawRect(
    "#0000ff",
    document.getElementById("w24").value,
    document.getElementById("h24").value,
    document.getElementById("xOffset24").value,
    document.getElementById("yOffset24").value
  )
  drawRect(
    "#0000ff",
    document.getElementById("w25").value,
    document.getElementById("h25").value,
    document.getElementById("xOffset25").value,
    document.getElementById("yOffset25").value
  )
  drawRect(
    "#0000ff",
    document.getElementById("w26").value,
    document.getElementById("h26").value,
    document.getElementById("xOffset26").value,
    document.getElementById("yOffset26").value
  )
  drawRect(
    "#0000ff",
    document.getElementById("w27").value,
    document.getElementById("h27").value,
    document.getElementById("xOffset27").value,
    document.getElementById("yOffset27").value
  )
}

function drawHurt() {
  drawRect(
    "#00ff00",
    document.getElementById("w1").value,
    document.getElementById("h1").value,
    document.getElementById("xOffset1").value,
    document.getElementById("yOffset1").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w2").value,
    document.getElementById("h2").value,
    document.getElementById("xOffset2").value,
    document.getElementById("yOffset2").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w3").value,
    document.getElementById("h3").value,
    document.getElementById("xOffset3").value,
    document.getElementById("yOffset3").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w4").value,
    document.getElementById("h4").value,
    document.getElementById("xOffset4").value,
    document.getElementById("yOffset4").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w5").value,
    document.getElementById("h5").value,
    document.getElementById("xOffset5").value,
    document.getElementById("yOffset5").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w6").value,
    document.getElementById("h6").value,
    document.getElementById("xOffset6").value,
    document.getElementById("yOffset6").value
  )
  drawRect(
    "#00ff00",
    document.getElementById("w7").value,
    document.getElementById("h7").value,
    document.getElementById("xOffset7").value,
    document.getElementById("yOffset7").value
  )
}

function drawHit() {
  drawRect(
    "#ff0000",
    document.getElementById("w11").value,
    document.getElementById("h11").value,
    document.getElementById("xOffset11").value,
    document.getElementById("yOffset11").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w12").value,
    document.getElementById("h12").value,
    document.getElementById("xOffset12").value,
    document.getElementById("yOffset12").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w13").value,
    document.getElementById("h13").value,
    document.getElementById("xOffset13").value,
    document.getElementById("yOffset13").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w14").value,
    document.getElementById("h14").value,
    document.getElementById("xOffset14").value,
    document.getElementById("yOffset14").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w15").value,
    document.getElementById("h15").value,
    document.getElementById("xOffset15").value,
    document.getElementById("yOffset15").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w16").value,
    document.getElementById("h16").value,
    document.getElementById("xOffset16").value,
    document.getElementById("yOffset16").value
  )
  drawRect(
    "#ff0000",
    document.getElementById("w17").value,
    document.getElementById("h17").value,
    document.getElementById("xOffset17").value,
    document.getElementById("yOffset17").value
  )
}


///RESET
function resetColl() {
  document.getElementById("w21").value = null;
  document.getElementById("h21").value = null;
  document.getElementById("xOffset21").value = null;
  document.getElementById("yOffset21").value = null;

  document.getElementById("w22").value = null;
  document.getElementById("h22").value = null;
  document.getElementById("xOffset22").value = null;
  document.getElementById("yOffset22").value = null;

  document.getElementById("w23").value = null;
  document.getElementById("h23").value = null;
  document.getElementById("xOffset23").value = null;
  document.getElementById("yOffset23").value = null;

  document.getElementById("w24").value = null;
  document.getElementById("h24").value = null;
  document.getElementById("xOffset24").value = null;
  document.getElementById("yOffset24").value = null;

  document.getElementById("w25").value = null;
  document.getElementById("h25").value = null;
  document.getElementById("xOffset25").value = null;
  document.getElementById("yOffset25").value = null;

  document.getElementById("w26").value = null;
  document.getElementById("h26").value = null;
  document.getElementById("xOffset26").value = null;
  document.getElementById("yOffset26").value = null;

  document.getElementById("w27").value = null;
  document.getElementById("h27").value = null;
  document.getElementById("xOffset27").value = null;
  document.getElementById("yOffset27").value = null;
}

function resetHurt() {
  document.getElementById("w1").value = null;
  document.getElementById("h1").value = null;
  document.getElementById("xOffset1").value = null;
  document.getElementById("yOffset1").value = null;

  document.getElementById("w2").value = null;
  document.getElementById("h2").value = null;
  document.getElementById("xOffset2").value = null;
  document.getElementById("yOffset2").value = null;

  document.getElementById("w3").value = null;
  document.getElementById("h3").value = null;
  document.getElementById("xOffset3").value = null;
  document.getElementById("yOffset3").value = null;

  document.getElementById("w4").value = null;
  document.getElementById("h4").value = null;
  document.getElementById("xOffset4").value = null;
  document.getElementById("yOffset4").value = null;

  document.getElementById("w5").value = null;
  document.getElementById("h5").value = null;
  document.getElementById("xOffset5").value = null;
  document.getElementById("yOffset5").value = null;

  document.getElementById("w6").value = null;
  document.getElementById("h6").value = null;
  document.getElementById("xOffset6").value = null;
  document.getElementById("yOffset6").value = null;

  document.getElementById("w7").value = null;
  document.getElementById("h7").value = null;
  document.getElementById("xOffset7").value = null;
  document.getElementById("yOffset7").value = null;
}

function resetHit() {
  document.getElementById("w11").value = null;
  document.getElementById("h11").value = null;
  document.getElementById("xOffset11").value = null;
  document.getElementById("yOffset11").value = null;

  document.getElementById("w12").value = null;
  document.getElementById("h12").value = null;
  document.getElementById("xOffset12").value = null;
  document.getElementById("yOffset12").value = null;

  document.getElementById("w13").value = null;
  document.getElementById("h13").value = null;
  document.getElementById("xOffset13").value = null;
  document.getElementById("yOffset13").value = null;

  document.getElementById("w14").value = null;
  document.getElementById("h14").value = null;
  document.getElementById("xOffset14").value = null;
  document.getElementById("yOffset14").value = null;

  document.getElementById("w15").value = null;
  document.getElementById("h15").value = null;
  document.getElementById("xOffset15").value = null;
  document.getElementById("yOffset15").value = null;

  document.getElementById("w16").value = null;
  document.getElementById("h16").value = null;
  document.getElementById("xOffset16").value = null;
  document.getElementById("yOffset16").value = null;

  document.getElementById("w17").value = null;
  document.getElementById("h17").value = null;
  document.getElementById("xOffset17").value = null;
  document.getElementById("yOffset17").value = null;
}


function draw() {
  drawHit();
  drawHurt();
  drawColl();
  console.log("drew all")
}

function reset() {
  resetHurt();
  resetHit();
  resetColl();
  console.log("reset all")
}

/// KEYBINDS
document.addEventListener("keyup", (e) => {
  if (e.key == "Enter" || e.key == "r") {
    draw();
  }
})

document.addEventListener("keyup", (e) => {
  if (e.key == "f") {
    clear();
  }
})

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && e.shiftKey == true || e.key == "v") {
    reset();
  }
})

//draw
document.addEventListener("keyup", (e) => {
  if (e.key == "q") {
    drawColl();
  }
})
document.addEventListener("keyup", (e) => {
  if (e.key == "a") {
    drawHurt();
  }
})
document.addEventListener("keyup", (e) => {
  if (e.key == "z") {
    drawHit();
  }
})
//clear
document.addEventListener("keyup", (e) => {
  if (e.key == "w") {
    clearColl();
  }
})
document.addEventListener("keyup", (e) => {
  if (e.key == "s") {
    clearHurt();
  }
})
document.addEventListener("keyup", (e) => {
  if (e.key == "x") {
    clearHit();
  }
})
//reset
document.addEventListener("keyup", (e) => {
  if (e.key == "e") {
    resetColl();
  }
})
document.addEventListener("keyup", (e) => {
  if (e.key == "d") {
    resetHurt();
  }
})
document.addEventListener("keyup", (e) => {
  if (e.key == "c") {
    resetHit();
  }
})