# Curso frontend 
#### EBAC
Repositório criado para trabalhar com meus projetos de estudos com o curso de front end.

# GIT
## Conceitos de versionamento
 - Histórico
 - Controle de versão
 - Quem alterou
 - O que alterou 
 - Quando alterou
 - Todos os arquivos
 - Evolução contínua 
 
 Arquivo A | Versão 1 | Versão 2
 Arquivo B | Versão 1 | Versão 2

 ## Instalação do Git
 https://git-scm.com
 - Windows: https://git-scm.com/download/win
 - Linux (apt-get): sudo apt-get install git
 - Mac (brew): brew install git

 ## Criar conta no GitHub

## Clonar o projeto 
- git clone https://github.com/leodanier13/curso-frontend
 ## commits
 Informação de alteração 
 - após testado todo seu código
 - git add * / git commit -m "mensagem" / git push (enviar alterações para o repositório GitHub) / git pull (puxar / trazer alterações do github para a máquina)

 ## GitFlow
 Fluxo do Git

 ## Branchs
 São ramificações / versões paralelas 
 - Main / master (vai para produção, quando o projeto é publicado)
 - Develop
 - DOD Definition of Done: Critérios de aceite
 - Versionamento 1.0.1

 git checkout -b dev (cria uma branch) / git checkout main/master/javascript II (muda de branch)

 ## Merge 
 Mescla de branchs. Você pode precisar resolver conflitos manualmente
 git merge main

 ## Pull Requests
 - Mescla de branchs no repositório
 - Permite code review 
 - O repositório resolve os conflitos automaticamente

 ## Configurar o GitFlow
 git flow init / git flow feature start {nome-da-feature}
