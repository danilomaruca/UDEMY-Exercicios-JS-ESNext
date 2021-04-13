// Chave como sendo função, número, objeto
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)      //forma incorreta de retornar o objeto
console.log(tecnologias.get('react').framework)

// outra forma de criar um MAP atribuindo elementos
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))    //has = elemento está contido ou não dentro do Map
chavesVariadas.delete(123)      //delete = excluir elemento de dentro do Map
console.log(chavesVariadas.has(123))       
console.log(chavesVariadas.size)        //size = diz quantos elementos estão presentes dentro do Map

chavesVariadas.set(123, 'a')        
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)