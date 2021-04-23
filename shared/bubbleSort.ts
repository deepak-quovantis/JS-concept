//Bubble Sort Algorithm
export class BubbleSort {
  bubbleSort = (arr): any => {
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
}
