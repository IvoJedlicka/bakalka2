let values = [];

function saveCellValue(cell) {
  let cellValue = parseInt(cell.innerText);
  let index = values.indexOf(cellValue);
  if (index === -1) {
    values.push(cellValue);
    cell.style.backgroundColor = "lightblue";
  } else {
    values.splice(index, 1);
    cell.style.backgroundColor = "";
  }
  updateAverage();
}

function updateAverage() {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  let average = values.length > 0 ? sum / values.length : 0;
  document.getElementById("average").innerText = "Průměr: " + average;
}
