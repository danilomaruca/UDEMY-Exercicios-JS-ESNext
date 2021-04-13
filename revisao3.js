// ES8: Object.values(valores de um objeto)/Object.entries(liga chave e valor)
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,   //criar o objeto somente com o valor da constante sem utilizar : + nome do objeto
    ola() {     //criar função sem uso de :function
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class 
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())     //criar objeto através da palavra new