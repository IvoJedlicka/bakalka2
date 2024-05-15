let values = [];

function saveCellValue(cell) {
  let cellValue = parseInt(cell.innerText);
  values.push(cellValue);
  cell.style.backgroundColor = "lightblue";
  updateAverage();
}

function updateAverage() {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  let average = sum / values.length;
  document.getElementById("average").innerText = "Průměr: " + average;
}
