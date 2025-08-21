let precos = [10, 20, 30, 40, 50]
let precosAjustados = []

for (let i = 0; i < precos.length; i++) {
    precosAjustados.push(precos[i] * 1.10)
}

console.log("Preços com aumento:", precosAjustados)
