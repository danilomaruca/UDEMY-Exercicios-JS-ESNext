// Set = estrutura de conjuntos, não indexada e não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)      //retorna todos os elementos e ignora a repetição
console.log(times.size)     //exibe o tamanho do set
console.log(times.has('vasco'))     //não aceita variação de tamanho de letras   
console.log(times.has('Vasco'))     
times.delete('Flamento')        //excluir elemento 
console.log(times.has('Flamengo'))      // falso pois o elemento foi excluido

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']     //cria set através de um array
const nomesSet = new Set(nomes)     
console.log(nomesSet)       //retonar os elemetos sem a repetição