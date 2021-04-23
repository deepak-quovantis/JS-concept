// Import stylesheets
import "./style.css";
import { BubbleSort } from "./shared/bubbleSort";
import { SelectionSort } from "./shared/selectionSort";

var a = [55, 4, 3, 4, 1, 7, 6, 8];

//Bubble Sort
// let bs = new BubbleSort();
// console.log("Bubble Sort");
// console.log(bs.bubbleSort(a));

//Selection Sort
let sel = new SelectionSort();
console.log("Selection Sort");
console.log(sel.selectionSort(a));

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Open Console</h1>`;
