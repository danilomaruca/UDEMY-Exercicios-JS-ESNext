// let e const
{
    var a = 2   //escopo aberto, pode ser visualizada de fora do bloco
    let b = 3   //escopo de bloco, somente pode ser acessado de dentro do bloco
    console.log(b)
}
console.log(a)

// Template String (valor da variável delimitado por `${}` interpretado e substituido na string final)
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring (tirar algo de dentro de uma estrutura)
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)