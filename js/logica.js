window.alert("Comienza ejercicio 1, estas listo?")
let nombre;
let saludo;
console.log(nombre)
nombre= prompt("Ingresa tu nombre:")
saludo="Te damos la bienvenida "+nombre
window.alert("Te damos la bienvenida "+nombre);

window.alert("Comienza ejercicio 2, estas listo?")
let numero;
let opuesto;
let inverso;
console.log(numero)
numero=prompt("Ingresa un número: ")
opuesto=numero*-1;
inverso=1/numero;
window.alert("El número ingresado es: "+numero+" su opuesto es "+opuesto+" y su inverso es: "+inverso);

window.alert("Comienza ejercicio 3, estas listo?");
let nota1;
let nota2;
let nota3;
let promedio;
console.log(nota1)
nota1= prompt("Ingresa nota del primer trimestre:")
nota1=parseInt(nota1);
console.log(nota2)
nota2= prompt("Ingresa nota del segundo trimestre:")
nota2=parseInt(nota2);
console.log(nota3)
nota3= prompt("Ingresa nota del tercer trimestre:")
nota3=parseInt(nota3);
promedio=(nota1+nota2+nota3)/3;
window.alert("Tu promedio es: "+promedio);

window.alert("Comienza ejercicio 4, estas listo?");
let valorHora;
let cantidadHorasDiarias;
let cantidadHorasTrabajadas;
let valorSalarioSemanal;
console.log(valorHora);
valorHora=prompt("Ingresa el valor de la hora de trabajo: ");
valorHora=parseInt(valorHora);
console.log(cantidadHorasDiarias);
cantidadHorasDiarias=prompt("Ingresa la cantidad diaria de horas trabajadas: ");
cantidadHorasDiarias=parseInt(cantidadHorasDiarias);
cantidadHorasTrabajadas=(cantidadHorasDiarias*5+cantidadHorasDiarias/2);
valorSalarioSemanal=cantidadHorasTrabajadas*valorHora;
window.alert("El salario semanal es de: "+valorSalarioSemanal+" pesos");

window.alert("Comienza ejercicio 5, estas listo?");
let a;
let b;
let varIntercambio;
console.log(a);
a = prompt("Ingresa variable A: ");
console.log(b);
b = prompt("Ingresa variable B: ");
window.alert("Ingresaste A: "+a+" y B: "+b);
varIntercambio=a;
a=b;
b=varIntercambio;
window.alert("Ahora A vale: "+a+" y B vale: "+b)

window.alert("Comienza ejercicio 6, estas listo?");
let vendedor;
let articulo;
let valorArticulo;
let cantidadVendida;
let sueldoMensual;
console.log(vendedor);
vendedor=prompt("Ingrese el nombre del vendedor: ");
console.log(articulo);
articulo=prompt("Ingrese el nombre del artículo: ");
console.log(valorArticulo);
valorArticulo=prompt("Ingrese el valor del artículo: ");
console.log(cantidadVendida);
cantidadVendida=prompt("Ingrese cantidad de artículos vendidos: ");
sueldoMensual=14000+(cantidadVendida*valorArticulo*0.16);
window.alert(vendedor+" vendió "+cantidadVendida+" "+articulo+" su sueldo mensual es de: "+sueldoMensual+" pesos");

window.alert("Comienza ejercicio 7, estas listo?");
let ancho;
let largo;
let valorMetroCuadrado;
let cantidadAlambre;
let valorLote;
console.log(ancho);
ancho=prompt("Ingrese el ancho del lote: ");
console.log(largo);
largo=prompt("Ingrese el largo del lote: ");
console.log(valorMetroCuadrado);
valorMetroCuadrado=prompt("Ingrese el valor del metro cuadrado: ");
valorLote=ancho*largo*valorMetroCuadrado;
cantidadAlambre=((ancho*2)+(largo*2))*3;
window.alert("El valor del terreno es: "+valorLote+" dolares y la cantidad de alambre necesaria para 3 vueltas es: "+cantidadAlambre+" metros");

window.alert("Comienza ejercicio 8, estas listo?");
let n1;
let n2;
console.log(n1);
n1=prompt("Ingrese un número entero: ")
n1=parseInt(n1);
console.log(n2);
n2=prompt("Ingrese otro número entero: ")
n2=parseInt(n2);
window.alert(n1+"+"+n2+"="+(n1+n2)+"; "+n1+"-"+n2+"="+(n1-n2)+"; "+n1+"*"+n2+"="+(n1*n2)+"; "+n1+"/"+n2+"="+(n1/n2)); 


window.alert("Comienza ejercicio 9, estas listo?");
let angulo1;
let angulo2;
let anguloCalculado;
console.log(angulo1);
angulo1=prompt("Ingrese el valor entero de un ángulo menor a 90°: ");
angulo1=parseInt(angulo1);
console.log(angulo2);
angulo2=prompt("Ingrese otro valor entero de un ángulo menor a 90°: ");
angulo2=parseInt(angulo2);
anguloCalculado=180-(angulo1+angulo2);
window.alert("El valor del ángulo restante es de  "+anguloCalculado+" grados");

window.alert("Comienza ejercicio 10, estas listo?");
let inversor1;
let capital1;
let inversor2;
let capital2;
let inversor3;
let capital3;
let montoTotal;

console.log(inversor1);
inversor1=prompt("Ingrese nombre del primer inversor: ");
console.log(capital1);
capital1=prompt("Ingrese monto aportado por el primer inversor: ");
capital1=parseInt(capital1);

console.log(inversor2);
inversor2=prompt("Ingrese nombre del segundo inversor: ");
console.log(capital2);
capital2=prompt("Ingrese monto aportado por el segundo inversor: ");
capital2=parseInt(capital2);

console.log(inversor3);
inversor3=prompt("Ingrese nombre del tercer inversor: ");
console.log(capital3);
capital3=prompt("Ingrese monto aportado por el primer inversor: ");
capital3=parseInt(capital3);

montoTotal=capital1+capital2+capital3;

window.alert(inversor1+" aportó "+capital1+" pesos, correspondiendole un porcentaje del "+((capital1/montoTotal)*100)+" % ///// "+inversor2+" aportó "+capital2+" pesos, correspondiendole un porcentaje del "+((capital2/montoTotal)*100)+" % ///// "+inversor3+" aportó "+capital3+" pesos, correspondiendole un porcentaje del "+((capital3/montoTotal)*100)+" % ///// y el capital total de la empresa es de $"+montoTotal);






