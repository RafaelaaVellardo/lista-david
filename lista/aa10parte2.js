function encontrarMagnitudeMax(vectors2D) {
    if (!vectors2D || vectors2D.length === 0) {
        throw new Error("Array vazio")
    }

    let maxMagnitude = null
    let vetorMax = null

    for (let i = 0; i < vectors2D.length; i++) {
        let v = vectors2D[i]

        if (typeof v.x !== "number" || typeof v.y !== "number") {
            throw new Error("Elemento inválido" + i)
        }

        let magnitude = Math.sqrt(v.x * v.x + v.y * v.y)

        if (maxMagnitude === null || magnitude > maxMagnitude) {
            maxMagnitude = magnitude;
            vetorMax = v
        }
    }
    return vetorMax
}

let vectors = [
    { x: 3, y: 4 },
    { x: 5, y: 12 },
    { x: 8, y: 15 }
]
console.log("Vetor com a maior magnitude:", encontrarMagnitudeMax(vectors))