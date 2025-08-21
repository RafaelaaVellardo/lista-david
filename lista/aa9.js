let respostas = [1, 2, 3, 4, 5, 3, 2, 1, 5, 4]
let contagemNotas = {}

for (let i = 0; i < respostas.length; i++) {
    let nota = respostas[i]
    if (contagemNotas[nota] === undefined) {
        contagemNotas[nota] = 1
    } else {
        contagemNotas[nota]++
    }
}

console.log("Contagem das notas:", contagemNotas)
