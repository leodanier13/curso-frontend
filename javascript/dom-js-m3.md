# DOM 
- Document Object Model
- Estrutura de um arquivo na Web 
- Representa documentos HTML ou XML
- Interface de programação
- NÃO é uma linguagem de programação 
- É essencial para o JS entender o modelo de páginas web 

## Para que serve?
- Alterar a estrutura
- Alterar o estilo 
- Alterar o conteúdo 

## Como?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores 
- Objetos (nós / nodes)

<html>
    <head></head>
    <body></body>
</html>

objeto = {
    html : {
        head : {},
        body : {
            h1 : {

            }
        }
    }
}

## DOM x JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar JavaScript
- Código é executado por navegadores
- Tornar as páginas mais dinâmicas 
- Evitar requisições desnecessárias (performance)
- SPA (Single Page Applications)
- Reagir rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript
- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento

### Exemplos
Seleciona o objeto e disponibiliza (métodos / funções).callback

- document.getElementById (id)
- document.getElementsByTagName ('div')
- ParentNode.appendChild (node)
- element.innerHTML
- element.style
- element.setAttribute()
- element.getAttribute()
- element.addEventListener()
- window.location
- window.onload (en-US)
- console.log()
- window.scrollTo()