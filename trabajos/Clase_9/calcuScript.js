document.querySelector("#calcular").addEventListener("click", () => {
    const n1 = parseInt(document.querySelector("#num1").value);
    const n2 = parseInt(document.querySelector("#num2").value);
    const op = document.querySelector("#op").value;

    let res;

    switch (op) {
        case "+": res = n1 + n2; break;
        case "-": res = n1 - n2; break;
        case "*": res = n1 * n2; break;
        case "/":
            if (n2 == 0) {
                res = "Math Error!";
            } else {
                res = n1 / n2;
            }
            break;

        default: res = "Syntax error!"; break;
    }

    document.querySelector("#out").value = " = " + res;
})