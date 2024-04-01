function generateArray(start, end) {
    const length = end - start + 1;
    return [...Array.from({length}, (_, i) => start + i)];
  }
  
  // example 
  console.log(generateArray(4, 7)); // [4, 5, 6, 7]
  console.log(generateArray(-19, 11)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]