function isPrime(num) {
    if (num < 2) {
      return false;


    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {


        return false;
      }


    }
    return true;
  }
  
  function filterPrimes(arr) {
    let primes = [];


    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {


        primes.push(arr[i]);
      }
    }

    return primes;


  }
  


  const inputArray = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const primeArray = filterPrimes(inputArray);
  console.log(primeArray); 