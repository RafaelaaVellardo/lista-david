let frutas = ["maçã", "banana", "maçã", "laranja", "banana"]
let frutasUnicas = []

for (let i = 0; i < frutas.length; i++) {
    let existe = false
    for (let j = 0; j < frutasUnicas.length; j++) {
        if (frutas[i] === frutasUnicas[j]) {
            existe = true
            break
        }
    }
    if (!existe) {
        frutasUnicas.push(frutas[i])
    }
}

console.log("Frutas únicas:", frutasUnicas)