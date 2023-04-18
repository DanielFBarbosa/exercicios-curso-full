//Exercício 3 - função com base e expoente 
function expoente(base,expoente){
//Método antigo
    let resultado = Math.pow(base,expoente)
//método novo
    resultado = base**expoente

    return resultado
}
console.log(expoente(2,3))