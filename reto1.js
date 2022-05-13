//Reto 1
let n1 = prompt("Ingrese el 1er numero:");
let n2 = prompt("Ingrese el 2do numero:");

if (parseFloat(n1) > parseFloat(n2)) {
  s = (parseFloat(n1) + parseFloat(n2));
  r = (parseFloat(n1) - parseFloat(n2));
  alert(`El 1er numero es mayor que el 2do 
La suma estos es ${s} y la resta es ${r}`)
} else {
  m = (parseFloat(n2) * parseFloat(n1));
  d = (parseFloat(n2) / parseFloat(n1))
  alert(`El 2do numero es mayor que el 1ro
El producto de estos es ${m} y la division es ${d}`)
}
//Reto 2