document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const resultDiv = document.getElementById("result");

  checkBtn.addEventListener("click", function () {
    const inputValue = textInput.value.trim();

    if (!inputValue) {
      alert("Please input a value");
      return;
    }

    const isPalindrome = checkPalindrome(inputValue);

    if (isPalindrome) {
      resultDiv.textContent = `${inputValue} is a palindrome`;
    } else {
      resultDiv.textContent = `${inputValue} is not a palindrome`;
    }
  });

  function checkPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Check if the cleaned string is a palindrome
    return cleanedStr === cleanedStr.split("").reverse().join("");
  }
});
