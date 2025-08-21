let cidades = ["São Paulo", "Curitiba", "Florianópolis", "Recife"]
let existeFlorianopolis = false

for (let i = 0; i < cidades.length; i++) {
    if (cidades[i] === "Florianópolis") {
        existeFlorianopolis = true
        break
    }
}
console.log("Florianópolis encontrada?", existeFlorianopolis)
