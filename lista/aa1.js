let alturas = [160, 172, 158, 180, 165]
let maior = alturas[0]

for (let i = 1; i < alturas.length; i++) {
    if (alturas[i] > maior) {
        maior = alturas[i]
    }
}

console.log("Maior altura:", maior)
