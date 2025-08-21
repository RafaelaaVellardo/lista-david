let numeros = [12, 33, 44, 55, 66, 77, 88, 99, 100, 21]
let contPares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        contPares++
    }
}

console.log("Quantidade de pares:", contPares);
