const gridTraveler = (row, col) => {
  if (row === 1 && col === 1) return 1;
  if (row === 0 || col === 0) return 0;

  return gridTraveler(row - 1, col) + gridTraveler(row, col - 1);
};

console.log(gridTraveler(1, 1)); // result -> 1
console.log(gridTraveler(2, 3)); // result -> 3
console.log(gridTraveler(3, 2)); // result -> 3
console.log(gridTraveler(3, 3)); // result -> 6
//console.log(gridTraveler(18, 18)); // result -> 2333606220
