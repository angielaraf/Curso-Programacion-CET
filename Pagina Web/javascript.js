//alert('Hola Javascript')


var nombre = "Angie";
var edad = 10
var estatura = 190

//document.write(nombre);

var datos = document.getElementById("datos");
datos.innerHTML= `
    <h2> Soy estudiante</h2>
    <h2> Mi nombre es: ${nombre}</h2>
    <h2> Mi edad es: ${edad}</h2>
    <h2> Mi estatura es: ${estatura}</h2>

`;

// sentencia condicionales

if (estatura > 150)
{
    datos.innerHTML += '<h1> Eres una persona alta </h1>';
}
else
{
    datos.innerHTML += '<h1> Eres una persona chaparra </h1>';
}