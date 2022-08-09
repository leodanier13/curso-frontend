## Funções Recursivas

- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calculoMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        notas += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); //escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'media: ' + media + ' - Resultado: ' + condicao;

}

// console.log()

// console.log("Média: " + calcularMedia([10, 8]))
// console.log(aprovacao( calcularMedia([10, 8]) ) )
console.log( aprovacao([10, 8]) );

// console.log("Média: " + calcularMedia([10, 8, 8, 6]))
// console.log(aprovacao( calcularMedia([10, 8, 8, 6]) ) )
console.log( aprovacao([10, 8, 8, 6]) );

// console.log("Média: " + calcularMedia([9, 6, 7]))
// console.log(aprovacao( calcularMedia([9, 6, 7]) ) )
console.log( aprovacao([9, 6, 7]) );