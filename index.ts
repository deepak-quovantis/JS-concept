// Import stylesheets
import "./style.css";

//Bubble Sort Algorithm
let bubbleSort = (arr): any => {
  let arrLength = arr.length;
  for (let i = arrLength - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

var a = [55, 4, 3, 4, 1, 7, 6, 9];
console.log(bubbleSort(a));

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Open Console</h1>`;
