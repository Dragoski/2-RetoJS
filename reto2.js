//Reto 1      
// let n1 = prompt("Ingrese el 1er numero:");
// let n2 = prompt("Ingrese el 2do numero:");

// if (parseFloat(n1) > parseFloat(n2)) {
//   s = (parseFloat(n1) + parseFloat(n2));
//   r = (parseFloat(n1) - parseFloat(n2));
//   alert(`El 1er numero es mayor que el 2do
// La suma estos es ${s} y la resta es ${r}`)
// } else {
//   m = (parseFloat(n2) * parseFloat(n1));
//   d = (parseFloat(n2) / parseFloat(n1))
//   alert(`El 2do numero es mayor que el 1ro
// El producto de estos es ${m} y la division es ${d}`)
// }
//Reto 2       
// let nota = [1, 8, 3]
// for (let i = 0; i < 3; i++) {
//   nota[i] = prompt(`Ingrese la nota del alumno ${i + 1}: `)
// }
// for (let i = 0; i < 3; i++) {
//   if (parseFloat(nota[i]) >= 7) {
//     alert(`El estado del alumno ${i + 1} es promocionado`)
//   } else {
//     alert(`El estado del alumno ${i + 1} es no promocionado`)
//   }
// }
//Reto 3      
// let num = prompt("Ingrese un numero del 1-99: ")

// switch (true) {
//   case parseFloat(num)>0 && parseFloat(num)<10:
//     alert(`el numero ${num} solo tiene un digito y cumple las condiciones`)
//     break;
//   case  parseFloat(num)>9 && parseFloat(num)<100:
//     alert(`el numero ${num} solo tiene 2 digito y cumple las condiciones`)
//     break;
//   case  parseFloat(num)>99 || parseFloat(num)<1 :
//     alert(`el numero ${num} no cumple las condiciones`)
//     break;
//   default:
//     alert("Ninguno");
// }
//Reto 4      
// let x = prompt("ingrese el 1er numero:");
// let y = prompt("ingrese el 2do numero:");
// let z = prompt("ingrese el 3er numero:");

// switch (true) {
//   case parseFloat(x)<parseFloat(y)&& parseFloat(y)<parseFloat(z):
//     alert(`El numero mas grande es ${z}`)
//     break;
//   case parseFloat(y)<parseFloat(z)&& parseFloat(z)<parseFloat(x):
//     alert(`El numero mas grande es ${x}`)
//     break;
//   case parseFloat(z)<parseFloat(x)&& parseFloat(x)<parseFloat(y):
//     alert(`El numero mas grande es ${y}`)
//     break;
//   case parseFloat(x)===parseFloat(y)&& parseFloat(y)===parseFloat(z):
//     alert(`Los numeros son iguales`)
//     break;
//   default:
//     alert("Ninguno")
//     break;
// }
//Reto 5      
// let num = prompt("Ingresa un numero:")

// switch (true) {
//   case parseFloat(num)>0:
//     alert(`el numero ${num} es positivo`);
//     break;
//   case parseFloat(num)<0:
//     alert(`el numero ${num} es negativo`);
//     break;
//   case parseFloat(num)===0:
//     alert(`el numero ${num} es nulo`);
//     break;
//   default:
//     alert("Ninguno")
//     break;
// }
//Reto 6      
// let num = prompt("Ingresar un numero para mostrar la cantidad de cifras:");

// switch (true) {
//   case parseFloat(num)>0 && parseFloat(num)<10:
//     alert(`El numero tiene 1 cifra`)
//     break;
//   case parseFloat(num)>9 && parseFloat(num)<100:
//     alert(`El numero tiene 2 cifras`)
//     break;
//   case parseFloat(num)>99 && parseFloat(num)<1000:
//     alert(`El numero tiene 3 cifras`)
//     break;
//   case parseFloat(num)>999:
//     alert(`Error`)
//     break;
//   case parseFloat(num)<0:
//     alert(`El numero debe ser positivo`)
//     break;
// }
//Reto 7      
// let preg = prompt("Cantidad total: ")
// let pregcorre = prompt("Preguntas respondidas correctamente: ")

// switch (true) {
//     case (parseFloat(pregcorre)<=(parseFloat(preg)*(100/100)))&&(parseFloat(pregcorre)>=(parseFloat(preg)*(90/100))) :
//         alert(`Su nivel es maximo`);
//         break;
//     case (parseFloat(pregcorre)<(parseFloat(preg)*(90/100)))&&(parseFloat(pregcorre)>=(parseFloat(preg)*(75/100))) :
//         alert(`Su nivel es medio`);
//         break;
//     case (parseFloat(pregcorre)<(parseFloat(preg)*(75/100)))&&(parseFloat(pregcorre)>=(parseFloat(preg)*(50/100))) :
//         alert("Su nivel es regular");
//         break;
//     case (parseFloat(pregcorre)<(parseFloat(preg)*(50/100)))&&(parseFloat(pregcorre)>=(parseFloat(preg)*(0/100))) :
//         alert(`Esta Fuera del nivel`);
//         break;
// }
//Reto 8      
// let dia = prompt("Introduzca un dia(numero): ")
// let mes = prompt("Introduzca un mes(numero): ")

// if ((parseFloat(dia)===25)&&(parseFloat(mes)===12)) {
//     alert("Es navidad");
// } else {alert("No es navidad");}
//Reto 9      
// let n1 = prompt("Ingrese el 1er numero:")
// let n2 = prompt("Ingrese el 2do numero:")
// let n3 = prompt("Ingrese el 3er numero:")

// switch (true) {
//     case (n1===n2)&&(n2===n3):
//         let R = ((parseFloat(n1)+parseFloat(n2))*parseFloat(n3));
//         alert(`Los numeros son iguales y el resultado es ${R}`)
//         break;
//     default:
//         alert("los numeros son diferentes entre si")
//         break;
// }
//Reto 10      
// let n = [1, 1, 1]
// for (let i = 0; i < 3; i++) {
//   n[i] = prompt(`Ingrese el numero ${i + 1}: `)
// }
// if ((n[0]<10)&&(n[1]<10)&&(n[2]<10)) {
//   alert("Todos los números son menores a diez")
// }else{alert("No todos los números son menores a diez")}
//Reto 11      
// let n = [1, 1, 1]
// for (let i = 0; i < 3; i++) {
//   n[i] = prompt(`Ingrese el numero ${i + 1}: `)
// }
// if ((n[0]<10)||(n[1]<10)||(n[2]<10)) {
//   alert("Alguno de los números es menor a diez")
// }else{alert("Ninguno de los numeros es menor a diez")}
//Reto 12      
// let x = prompt("Ingrese el eje x:")
// let y = prompt("Ingrese el eje y:")

// switch (true) {
//     case ((parseFloat(x)>0)&&(parseFloat(y)>0)):
//         alert("La coordenada esta en el 1er cuadrante")
//         break;
//     case ((parseFloat(x)<0)&&(parseFloat(y)>0)):
//         alert("La coordenada esta en el 2do cuadrante")
//         break;
//     case ((parseFloat(x)<0)&&(parseFloat(y)<0)):
//         alert("La coordenada esta en el 3er cuadrante")
//         break;
//     case ((parseFloat(x)>0)&&(parseFloat(y)<0)):
//         alert("La coordenada esta en el 4to cuadrante")
//         break;
//     default:
//         alert("No se encuentra en ningun cuadrante")
//         break;
// }
//Reto 13      
// let sueldo = prompt("Ingrese el sueldo de la persona:")
// let aa = prompt("Ingrese los años de antigüedad:")

// switch (true) {
//     case ((parseFloat(sueldo)<500)&&(aa>=10)):
//         let aum = parseFloat(sueldo)+(parseFloat(sueldo)*(20/100));
//         alert(`Tiene un aumento del 20 % haciendo que su sueldo sea de $ ${aum}`);
//         break;
//     case ((parseFloat(sueldo)<500)&&(aa<10)):
//         let aum1 = parseFloat(sueldo)+(parseFloat(sueldo)*(5/100));
//         alert(`Tiene un aumento del 5 % haciendo que su sueldo sea de $ ${aum1}`);
//         break;
//     case ((parseFloat(sueldo)>=500)):
//         alert(`No tiene ningun aumento`);
//         break;
//     default:
//         alert("NiNguno")
//         break;
// }
//Reto 14      
let n1 = prompt("Ingrese el 1er numero:");
let n2 = prompt("Ingrese el 2do numero:");
let n3 = prompt("Ingrese el 3er numero:");

switch (true) {
    case (n1>n2)&&(n2>n3):
        let v = (n1 - n3);
        alert(`El mayor es ${n1} y el menor es ${n3} y su variacion es ${v}`);
        break;
    case (n2>n3)&&(n3>n1):
        let v = (n2 - n1);
        alert(`El mayor es ${n2} y el menor es ${n1} y su variacion es ${v}`);
        break;
    case (n3>n1)&&(n1>n2):
        let v = (n3 - n2);
        alert(`El mayor es ${n3} y el menor es ${n2} y su variacion es ${v}`);
        break;
    case (n3>n2)&&(n2>n1):
        let v = (n3 - n1);
        alert(`El mayor es ${n3} y el menor es ${n1} y su variacion es ${v}`);
        break;
    case (n1>n3)&&(n3>n2):
        let v = (n1 - n2);
        alert(`El mayor es ${n1} y el menor es ${n2} y su variacion es ${v}`);
        break;
    case (n2>n1)&&(n1>n3):
        let v = (n2 - n3);
        alert(`El mayor es ${n2} y el menor es ${n3} y su variacion es ${v}`);
        break;
    default:
        break;
}