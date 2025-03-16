let vitorias = 0
let derrotas = 0

function saldo(vitorias, derrotas) {
    let saldovitorias = vitorias - derrotas
    return saldovitorias
}

let resultado = saldo(120, 5)

switch (resultado >= 0) {
    case resultado <= 10:
        nível = "Ferro"
        console.log("o herói tem saldo de " + resultado + " e está no nível de " + nível)
        break
    case resultado >= 11 && resultado <= 20:
        nível = "Bronze"
        console.log("o herói tem saldo de " + resultado + " e está no nível de " + nível)
        break
    case resultado >= 21 && resultado <= 50:
        nível = "Prata"
        console.log("o herói tem saldo de " + resultado + " e está no nível de " + nível)
        break
    case resultado >= 51 && resultado <= 80:
        nível = "Ouro"
        console.log("o herói tem saldo de " + resultado + " e está no nível de " + nível)
        break
    case resultado >= 81 && resultado <= 90:
        nível = "Diamante"
        console.log("o herói tem saldo de " + resultado + " e está no nível de " + nível)
        break
    case resultado >= 91 && resultado <= 100:
        nível = "Lendário"
        console.log("o herói tem saldo de " + resultado + " e está no nível de " + nível)
        break
    case resultado >= 101:
        nível = "Imortal"
        console.log("o herói tem saldo de " + resultado + " e está no nível de " + nível)
        break
}