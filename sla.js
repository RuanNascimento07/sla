let custos = [800,200,400,500];
let contador = 0 ;
let somatorio = 0 ;
while (contador<custos.length){
       somatorio = somatorio + custos[contador]
       contador = contador + 1
}
console.log("O seu custo mensal é " + somatorio);

let salario = [2300,1800];
contador = 0 ;
let somatoriosalario = 0 ;
while (contador<salario.length){
       somatoriosalario = somatoriosalario + salario[contador]
       contador = contador + 1
}
console.log("O seu salario mensal é " + somatoriosalario);

let saldo = somatoriosalario-somatorio
console.log ("Seu saldo mensal é " + saldo)