function trocar(numero, proximo, parametro) {
    if (numero >= parametro){
        numero = 0
        proximo++
    }
    return [numero, proximo]
}

let n1
let n2

[n1, n2] = trocar(1, 0, 100)

console.log(n1, n2)