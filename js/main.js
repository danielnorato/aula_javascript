function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar!"
    alert("Obrigado por clicar")
}
function redirecionar(){
    window.open("https://digitalinnovation.one")
    window.location.href = "https://digitalinnovation.one"
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("Página carregada!")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}