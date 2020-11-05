//Calculates the sum of two numbers and the numbers in between
function sumAll(firstNumber, secondNumber) {
    let sum = 0;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (firstNumber > secondNumber) {
        while (firstNumber >= secondNumber) {
            sum = sum + secondNumber;
            secondNumber++;
        }
    }
    else if (firstNumber == secondNumber) {
        sum = firstNumber + secondNumber;
    } else {
        while (secondNumber >= firstNumber) {
            sum = sum + firstNumber;
            firstNumber++;
            console.log(typeof sum);
        }
    }
    console.log("Sum is: " + sum);
    document.getElementById("finalResult").innerHTML = sum;
    return sum;
}