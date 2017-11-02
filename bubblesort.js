function bubbleSort(arr) {
  var finalCount = 0;
  for (var i = 0; i < arr.length; i++) {
    finalCount += swap(arr);
  }  
  return "swappedArr is " + arr + "and it's swapped" + finalCount + "times.";
}

function swap(arr) {
  var count = 0;
  for (var j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      count++;
    }
  }
  return count;
}

bubbleSort([3, 2, 1])