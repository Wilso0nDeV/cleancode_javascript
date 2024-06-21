
//Uso correcto de var, let y const

//var : no permite definir variable con ambito de bloque
//let : si permite definir variable con ambito de bloque
//const : si permite definir variable con ambito de bloque, pero a diferencia de let estas no se pueden reasignar
//pero si se trata de un objeto estos si se pueden mutar(modificar) sus valores, mas no sus keys.

//Ejemplo de var : aqui vemos como "variable va cambiando su valor a pesar de estar en un ambito de bloque"
console.log(`Ejemplo de var`)
var variable = 5
{
    console.log('inside', variable) //5
    var variable = 10
}
console.log('outside', variable) //10
variable = variable * 2 
console.log('change', variable) //20

console.log(`\n`)

console.log(`Ejemplo de let`)
//Ejemplo de let : aqui vemos como "variable no ah cambiando su valor a pesar por estar en un ambito de bloque"
let variableLet = 5
{
    //esto me dara un error ya que dentro del ambito esta "variableLet" no esta declarada
    //y me detendra la ejecución
    
    //lo comentaremos para que no me salte el error, quitar los "//" para probar
   // console.log('inside', variableLet)  
   // let variableLet = 10
}
console.log('outside', variableLet) 
console.log(`\n`)

//Solucion
console.log(`Solucion Ejemplo de let`)
//A pesar que variableLetSolution aparenta estar creada 2 veces, no es asi ya que gracias al ambito
//de bloque que nos proporciona let, estas variables son diferentes, son 2 espacios de memoria distintas
let variableLetSolution = 5
{
    let variableLetSolution = 10
    console.log('inside', variableLetSolution)  //10
}
console.log('outside', variableLetSolution) //5
variableLetSolution = variableLetSolution * 2
console.log('change', variableLetSolution) //10

console.log(`\n`)

console.log('Ejemplo de const') 
const variableConst = 5
{
    const variableConst = 10
    console.log('inside', variableConst)  //10
}
console.log('outside', variableConst) //5
//variableConst = variableConst * 2 //Error : const no deja reaccignar su valor
//console.log('change', variableConst) //error
console.log(`\n`)

console.log('Ejemplo de const con un objeto') 
console.log(`\n`)

//Podemos observar que si podemos mutar sus valores, a travez de sus propiedades
const variableConstObject = {name : 'Wilson', edad : 33} 
{
    const variableConstObject = {name : 'Edgar', edad : 32} 
    console.log('inside', variableConstObject)  //{name : 'Edgar', edad : 32}
}//
console.log('outside', variableConstObject) //{name : 'Wilson', edad : 33}
variableConstObject.name = 'Edgar Vasquez'
variableConstObject.edad = 30
console.log( 'change', variableConstObject) //{name : 'Edgar Vasquez', edad : 30}