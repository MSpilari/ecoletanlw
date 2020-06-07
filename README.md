# Ecoleta - NLW

![Header Markdown]('./public/icones/headerMarkdown.jpg')

Esta aplicação foi desenvolvida durante a NLW da Rocketseat, sendo uma aplicação **FullStack**, pois programei o FrontEnd e o BackEnd.

## Objetivo

O que foi proposto era a criação de uma aplicação em que o usuário poderia:

* Cadastrar pontos de coleta de qualquer parte do Brasil.
  * Aqui foi criado uma página de formulário em que o usuário poderia preencher o nome do ponto de coleta bem como colocar uma foto da fachada do mesmo,
  a ágina também contém dois campos, sendo um deles para informar o estado e outro a cidade. Quando a página é carregada os estados são carregados, pois  este campo consome uma **API do IBGE**. A partir do momento em que o usuário escolhe o estado, o campo da cidade é liberado com todas as cidades referentes ao estado escolhido, pois este campo também consome a mesma **API**.

* Pesquisar pontos de coleta já cadastrados no banco de dados da aplicação.
  * Na HomePage existe um campo em que o usuário pode informar a cidade, para a aplicação fazer uma busca em seu **banco de dados** e retornar caso existam pontos de coleta cadastrados na cidade desejada ou não.

## Ferramentas usadas

* Javascript(No FrontEnd e BackEnd).
* CSS.
* HTML.
* Express.
  * Utilizei este framework BackEnd para fazer o servidor com as rotas da aplicação.
* Nunjucks.
  * Para tornar as páginas HTLM dinâmicas, pois algumas delas teriam que renderizar dados do banco de dados e estes **não** poderiam ser __Hard Enconded__.
* SQLite3.
  * Foi usado como o banco de dados da aplicação, em que o usuário consegue consultar e criar novos dados no mesmo.
