// 2
let numeros = [];
for (let i = 0; i < 3; i++) {
    let numero = prompt("Digite um número: ");
    numeros.push(numero);
}

console.log("Array original:", numeros);

numeros.reverse();

console.log("Array invertido:", numeros);
