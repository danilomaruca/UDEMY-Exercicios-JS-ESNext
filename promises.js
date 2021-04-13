// Promisses = utilizada para processamento assincrono, promessa cumprida ou rejeitada
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {       //promossa atendida / promessa rejeitada
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))     //forma de tratar o erro utilizando reject 