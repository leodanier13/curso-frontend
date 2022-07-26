function calculoMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao(notas) {

    let media = calculoMedia(notas); //escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}

// Função Recursivas
function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero); // 9

}
// contagemRegressiva(10);

/* 
- Formulário para envio de dados para cálculo da média
 */

const formulario1 = document.getElementById('formulario-01');

if (formulario1)
    formulario1.addEventListener('submit', function (evento) {

        evento.preventDefault();
        evento.stopPropagation();

        if (this.getAttribute("class").match(/erro/)) {
            return false;
        }

        let dados = new FormData(this);

        let notas = [];

        for (let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if (!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });

function validaCampo(elemento) {
    elemento.addEventListener('focusout', function (event) {


        event.preventDefault();

        if (this.value == '') {
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

/* Validação de cep */
function validaCep(elemento) {
    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        let cep = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, '') : this.value;

        if (cep != '' && cep.match(/[0-9]*/) && cep >= 0 && cep <= 10) {
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
            this.classList.add('erro');
            return false;
        }
    });
}

/* Validação do campo email */
function validaCampoEmail(elemento) {
    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        if (this.value.match(/@/) && this.value.match(/./)) {
            document.querySelector('mensagem').innerHTML = "";
            this.classList.remove("erro");
            this.parentNode.classList.remove("erro");
        } else {
            document.querySelector("mensagem").innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add("erro");
            this.parentNode.classList.add("erro");
            return false;
        }
    });
}

/* Validação Campo Uf */
function validaUf(elemento) {
    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        let Uf = this.value

        if (Uf !== "" && Uf.match(/\D{2}/gi)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimentodos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}


let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
let camposNumericos = document.querySelectorAll("input.numero");
let camposEmail = document.querySelectorAll("input.email");
let campoCep = document.querySelectorAll("input.numerico");
let campoUf = document.querySelectorAll("input.Uf");

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
    validaCampoEmail(emFoco);
}

for (let emFoco of campoCep) {
    validaCep(emFoco);
}

for (let emFoco of campoUf) {
    validaUf(emFoco);
}
