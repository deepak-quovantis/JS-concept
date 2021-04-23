export class SelectionSort {
  //find the index with smallest value and shift it to front
  selectionSort = (arr): any => {
    let minIndex, temp;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
      minIndex = i;
      for (let j = i + 1; j < arrLength; j++) {
        if (arr[minIndex] > arr[j]) {
          temp = arr[minIndex];
          arr[minIndex] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  };
}
