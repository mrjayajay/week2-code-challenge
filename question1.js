function swapCase(str) {

    // Initialize an empty array
    const result = [];
  
    // Iterate through each character in the input string
    for (let i=0; i < str.length; i++) {
      // Check if the current character is an uppercase letter
      if (str[i] == str[i].toUpperCase()) {
        // Convert the uppercase letter to lowercase 
        result.push(str[i].toLowerCase());
      }
      // Check if the current character is a lowercas
      else if (str[i] == str[i].toLowerCase()) {
        // Convert the lowercase letter to uppercase and add it to the result array
        result.push(str[i].toUpperCase());
      }
      // If the current character is neither uppercase nor lowercase, add it to the result array as is
      else {
        result.push(str[i]);
      }
    }
  
    // Output the joined result array 

    return result.join("");
  }
  
  

  const input = "The Quick Brown Fox";
  const output = swapCase(input);
  console.log(output); // Output: "tHE qUICK bROWN fOX"