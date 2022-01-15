//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado (lado){
    return lado *4;
}


function areaCuadrado (lado){
    return lado*lado
}

console.groupEnd();
//Triangulo
console.group("Triángulo");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd();
//Triangulo isosceles
function alturaTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 & lado1!=lado3 & lado2!=lado3){
        altura= Math.sqrt((lado1*lado1)-((lado3*lado3)/4));
        return altura;
    } else if(lado1 == lado3 & lado1!=lado2 & lado2!=lado3){
        altura= Math.sqrt((lado1*lado1)-((lado2*lado2)/4));
        return altura;
    } else if(lado2 == lado3 & lado1!=lado2 & lado1!=lado3){
        altura= Math.sqrt((lado2*lado2)-((lado1*lado1)/4));
        return altura;
    } else return "No es un Triangulo isosceles";
}

//Código del Circulo
console.group("Circulo");

//Diámetro
function diametroCirculo (radio){
    return radio * 2;
}
//PI
const PI = Math.PI;
//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro *PI;
}
//Área
function areaCirculo (radio){
    return (radio*radio)*PI;
}

console.groupEnd();

//Aquí interactuamos con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const perimetrot = perimetroTriangulo(value1, value2, value3);
    alert(perimetrot);
}
function calcularAreaTriangulo(){
    const input3= document.getElementById("InputBase");
    const input4= document.getElementById("InputAltura");
    const value3 = input3.value;
    const value4= input4.value;
    const areat = areaTriangulo(value3, value4);
    alert(areat);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}