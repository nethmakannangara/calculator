
function calc() {
    // let num1=document.getElementById("number1").value;
    // let num2=document.getElementById("number2").value;
    // document.getElementById("lblOutput");

    // console.log(num1);
    // console.log(typeof num1);
    // console.log(num2);


    // let tempnum=num1;

    //  lblOutput.innerHTML=num1+num2;

    let num1 = "";
    let num2 = "";

    num1 = new Number(document.getElementById("number1").value);
    num2 = new Number(document.getElementById("number2").value);

    let operators = document.getElementById("operator").value;

    switch (operators) {
        case "+":
            lblOutput.innerHTML = num1 + num2;
            break;
        case "-":
            lblOutput.innerHTML = num1 - num2;
            break;
        case "*":
            lblOutput.innerHTML = num1 * num2;
            break;
        case "/":
            lblOutput.innerHTML = num1 / num2;
            break;
        default:
            lblOutput.innerHTML = "Error";
            break;
    }

}