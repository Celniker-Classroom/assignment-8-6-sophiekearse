// ----- Functions to implement -----

// 1) myFunc(): persistent counter
let counter = 0;
function myFunc() {
  counter++;
  return counter;
}


function getRandomNum(max) {
  max = Number(max);
  if (!Number.isInteger(max) || max <= 0) {
    return 0;
  }
  return Math.floor(Math.random() * max) + 1;
}

// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
  return Number(x) + Number(y);
}

// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2) {
  x1 = Number(x1);
  y1 = Number(y1);
  x2 = Number(x2);
  y2 = Number(y2);
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  
  const discriminant = b * b - 4 * a * c;
  
  if (discriminant > 0) {
    // Two real roots
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    // One root
    const root = -b / (2 * a);
    return [root];
  } else {
    // Complex roots
    const realPart = -b / (2 * a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    return [`${realPart}+${imaginaryPart}i`, `${realPart}-${imaginaryPart}i`];
  }
}


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
