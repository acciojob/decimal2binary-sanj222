function decimalToBinary(num) {
  //Write you code here
  if (num < 0) {
        return "Please enter a non-negative decimal number.";
    }

    if (num === 0) {
        return "0";
    }

    let binaryNum = "";
    while (num > 0) {
        binaryNum = (num % 2) + binaryNum;
        num = Math.floor(num / 2);
    }

    return binaryNum;
}

window.decimalToBinary = decimalToBinary;
