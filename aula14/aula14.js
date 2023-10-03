var valor;
var operacao;

function efetuar_soma(){
    if(typeof valor != typeof undefined && typeof operacao != typeof undefined){
        valor = operacao(valor, Number(document.getElementById("valor").value));
    }else{
    valor = Number(document.getElementById("valor").value);
    document.getElementById("valor").value = "";
    }
    operacao = soma;

}
function resultado(){
   document.getElementById("valor").value = operacao(valor,Number(document.getElementById("valor").value));


   valor = undefined;
   operacao = undefined;
}


function insere_0(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(0);
}
function insere_1(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(1);
}
function insere_2(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(2);
}
function insere_3(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(3);
}
function insere_4(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(4);
}
function insere_5(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(5);
}
function insere_6(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(6);
}
function insere_7(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(7);
}
function insere_8(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(8);
}
function insere_9(){
    document.getElementById("valor").value = document.getElementById("valor").value.concat(9);
}

function apagar(){
    document.getElementById("valor").value=document.getElementById("valor").value.substring(0,document.getElementById("valor").value.length-1)
}

function soma(n1, n2) {
    return n1 + n2;
}
function subtracao(n1, n2) {
    return n1 - n2;
}
function multiplicacao(n1, n2) {
    return n1 * n2;
}
function divisao(n1, n2) {
    return n1 / n2;
}
function somar() {
    document.getElementById("resultado").value = soma(Number(document.getElementById("n1").value),
       Number (document.getElementById("n2").value));
}
function menos() {
    document.getElementById("resultado").value = subtracao(Number(document.getElementById("n1").value),
       Number (document.getElementById("n2").value));
}
function vezes() {
    document.getElementById("resultado").value = multiplicacao(Number(document.getElementById("n1").value),
       Number (document.getElementById("n2").value));
}
function dividir() {
    document.getElementById("resultado").value = divisao(Number(document.getElementById("n1").value),
       Number (document.getElementById("n2").value));
}
function apagar(){
    document.getElementById("valor").value=document.getElementById("valor").value.substring(0,document.getElementById("valor").value.length-1)
}
function deletar() { 
    document.getElementById("valor").value=document.getElementById("valor").value.substring(0,document.getElementById("valor").value.length-document.getElementById("valor").value.length)
}
function adicionar_ponto(){ 
    if(document.getElementById("valor").value.includes("."))
    document.getElementById("valor").value =
    document.getElementById("valor").value.concat(".")
}
function porcentagem(){
    if(typeof valor == typeof undefined) {
        document.getElementById("valor").value =
        Number(document.getElementById("valor").value)/100;
    }else{
    document.getElementById("valor").value =
    (valor/100) *
    Number(document.getElementById("valor").value);
}
}

function resultado() {
    document.getElementById("valor").value
} 

function addNumero(){
    valor = addnum(Number(document.getElementById('valor').value))
}
function menosNumero(){
    valor = menosnum(Number(document.getElementById('valor').value))
}
function apagarMemoria(){
    memoria = 0
    return console.log(memoria)
}
function mostrarMemoria(){
    document.getElementById('valor').value = memoria
}
function resultado(){
    document.getElementById('valor').value = operacao(valor, Number(document.getElementById('valor').value))

    valor = undefined
    operacao = undefined
}
function addnum(n1){
    memoria += n1
    return console.log(memoria)
}
function menosnum(n1){
    memoria -= n1
    return console.log(memoria)
}