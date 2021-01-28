function soma(n1, n2){
    return n1 + n2
}

alert( soma( 5 , 10 ))

function setReplace( frase, nome, novo_nome){
    return frase.replace(nome,novo_nome)
}

alert (setReplace("vai Japão", "Japão", "Brasil"))

var validar = 0
function validaIdade(idade){
    if (idade <18)
        return validar = false
    else 
        return validar = true
}

var idade = prompt("qual é a sua idade?")
validaIdade(idade)
console.log(validar)