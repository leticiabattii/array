// 6
let primeiroArray = []
let segundoArray = []

for(let i = 0; i< 10; i++){
    let numero = parseInt(prompt("Digite o numero " + ":"));
    primeiroArray.push(numero);
}

for(let numero of primeiroArray){
    if (numero % 2 !== 0){
        segundoArray.push(numero);
    }
}

console.log("Numeros impares do primeiro array copiados para o segundo array: ");
console.log(segundoArray);