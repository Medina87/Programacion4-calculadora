function val(validar){
if (document.getElementById("n1").value == '' || document.getElementById("n2").value == ''){
alert("Error: Ingrese un numero");
return false;
}
if ((isNaN(document.getElementById("n1").value)) || (isNaN(document.getElementById("n2").value))) {
alert("Error: Ingrese solo numeros");
return false;
}


    var operando1 = document.calc.operando1.value
    var operando2 = document.calc.operando2.value
    var result = eval(operando1 + validar + operando2)
    document.calc.resultado.value = result
}
function validar(validar){
if (document.getElementById("n1").value == 0 || document.getElementById("n2").value == 0) {
alert("Error: No se puede dividir entre 0");
return false;
}
var operando1 = document.calc.operando1.value
    var operando2 = document.calc.operando2.value
    var result = eval(operando1 + validar + operando2)
    document.calc.resultado.value = result
}
window.onload=carga