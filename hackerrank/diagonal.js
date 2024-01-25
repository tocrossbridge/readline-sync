const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

function diagonalDifference(arr) {
  let difference = 0;
  const length = arr.length;

  for (let i = 0;i < length;i++) {
    difference += arr[i][i] - arr[i][length - 1 - i];
  }

  return Math.abs(difference);
}

const sum = diagonalDifference(arr)
console.log(`Resultado: ${sum}`)