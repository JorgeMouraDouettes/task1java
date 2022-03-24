// let num1 = parseInt(prompt("Digite um numero")) // 
// let num2 = parseInt(prompt("Digite o segundo numero")) / 

// console.log(num1 + num2)
// console.log(num1 *num2)
// console.log(num1 / num2 )
// console.log(num1 - num2)

// Questao 1 
// let nome = prompt("Insira seu nome")
// console.log(nome)
// alert(nome)

// Questao 2)
//let num1 = parseInt(prompt("Digite um numero"))
// let num2 = parseInt(prompt("Digite o segundo numero"))

// console.log(num1 + num2)

//Questao 3)
// let notaUm = parseFloat(prompt("Digite a primeira nota"))
// let notaDois = parseFloat(prompt("Digite a segunda nota"))

// console.log((notaUm + notaDois) /2)

// let notaUm = parseFloat(prompt("Digite a primeira nota"))
// let notaDois = parseFloat(prompt("Digite a segunda nota"))

//  console.log((notaUm + notaDois) /2)

// Para mostrar no alerta use: alert("A média é " + (notaUm + notaDois)/2 ) 

// Questao 4)
// let ano = parseInt(prompt("Insira o ano em que voce nasceu"))
// console.log(2022 - ano)

// Questao 5)
// let ganho = parseInt(prompt("Quanto voce ganha por hora"))
// let hora = parseInt(prompt("Voce trabalha quantas horas por mes ?"))
// console.log(hora*ganho)

// questao 6)
// // let temp = parseFloat(prompt("Diga a temperatura em graus Fahrenheit "))

// // console.log(5 * ((temp-32) / 9))


// Estrutura de decisao


// let num1 = parseInt(prompt("Digite o numero"))

// if(num1 % 2 == 0){
//     console.log("Esse numero é par")
// }else{
//     console.log("Esse numero é impar")
// }



// let sexo = prompt("Fale seu sexo").toLowerCase(); // para nao da erro caso bote a letra em maiusculo
// if(sexo === "f"){
//     console.log("Feminino");
// }else if(sexo ==="m"){
//     console.log("Masculino");
// }else{
//     console.log("Essce sexo e invalido");
// }

// questao 1)
// let num1 = parseInt(prompt("Digite o primeiro numero"))
// let num2 = parseInt(prompt("Digite o segundo numero"))

// if(num1>num2){
//     console.log("O numero 1 e maior que o numero 2 ")
// }else{
//     console.log("O numero 2 e maior que o numero 1 ")
// }

// questao 2)
//   let num = parseInt(prompt("Digite o valor"))
//   if(num >=0){
//       console.log("Esse numero é positivo")
//   }else{
//       console.log("Esse numero é negativo")
//   }

// questao 3)
// let sexo = prompt("Fale seu sexo").toLowerCase(); // para nao da erro caso bote a letra em maiusculo
// if(sexo === "f"){
//     console.log("Feminino");
// }else if(sexo ==="m"){
//     console.log("Masculino");
// }else{
//     console.log("Essce sexo e invalido");
// }


// questao 4)
// let nota1 = parseFloat(prompt("Digite a primeira nota"))
// let nota2 = parseFloat(prompt("Digite a segunda nota"))
// let nota3 = parseFloat(prompt("Digite a terceira nota"))

// let media = (nota1 + nota2 + nota3)/3
 
// if(media >= 7 ){
//     console.log("Aluno aprovado")
// }else if(media < 7 ){
//     console.log("Aluno reprovado")
// }else if (media===10){
//      console.log("Aluno aprovado com media 10")
// }

let num1 = parseInt(prompt("Insira o primeiro valor"))
let num2 = parseInt(prompt("Insira o segunda valor"))
let num3 = parseInt(prompt("Insira o terceiro valor"))

let nMaior = Math.max(num1,num2,num3)
     let nMenor = Math.min(num1,num2,num3)
         console.log("O maior número é: " + nMaior + ", o menor é: " + nMenor)
