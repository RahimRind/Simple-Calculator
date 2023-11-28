function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.getElementById('result').innerHTML = "Error: Division by zero";
                return;
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
        case 'sqrt':
            result = Math.sqrt(num1);
            break;
        case '!':
            result = factorial(num1);
            break;
        default:
            document.getElementById('result').innerHTML = "Error: Invalid operator";
            return;
    }
     document.getElementById('result').innerHTML = `Result: ${result}`;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
