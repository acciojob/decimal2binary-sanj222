function decimalToBinary(num) {
  //Write you code here
  if (decimalNum < 0) {
        return "Please enter a non-negative decimal number.";
    }

    if (decimalNum === 0) {
        return "0";
    }

    let binaryNum = "";
    while (decimalNum > 0) {
        binaryNum = (decimalNum % 2) + binaryNum;
        decimalNum = Math.floor(decimalNum / 2);
    }

    return binaryNum;
}

window.decimalToBinary = decimalToBinary;
