// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  let mLength = arr.length;
  for (let i = 1; i < mLength; i = i + 1) {
    if (min > arr[i]) { min = arr[i] };
    if (max < arr[i]) { max = arr[i] };
    sum = sum + arr[i];
  }
  let avg = sum / mLength;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  let mLength = arr.length;
  for (let i = 0; i < mLength; i = i + 1) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let mLength = arrOfArr.length;
  for (let i = 0; i < mLength; i = i + 1) {
    if (func(arrOfArr[i]) > max) { max = func(arrOfArr[i]) };
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let mLength = arr.length;
  for (let i = 1; i < mLength; i = i + 1) {
    if (min > arr[i]) { min = arr[i] };
    if (max < arr[i]) { max = arr[i] };
  }
  return Math.abs(max - min);
}
