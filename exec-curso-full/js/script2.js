//Exercício 2 Criar uma função com os comprimentos dos tres lados

function classificaTriangulo(lado1,lado2,lado3){
    if(lado1 ==lado2 && lado2 ==lado3){
        return "Equilátero"
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}
console.log(classificaTriangulo(2,2,2));
console.log(classificaTriangulo(2,3,2));
console.log(classificaTriangulo(3,4,5));
