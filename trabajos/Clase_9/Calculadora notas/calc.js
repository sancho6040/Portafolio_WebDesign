//Sergio Andres Sanchez O.
document.querySelector(".calcular").addEventListener("click", () => {
    
    const n1 = parseFloat(document.querySelector("#num1").value);
    const n2 = parseFloat(document.querySelector("#num2").value);
    const n3 = parseFloat(document.querySelector("#num3").value);

    let res;

    res = (n1*0.3) + (n2 * 0.3) + (n3 * 0.4);

    if(isNaN(res)){
        res = "valor incorrecto"
    }

    document.querySelector("#out").value = " = " + res;
    
})