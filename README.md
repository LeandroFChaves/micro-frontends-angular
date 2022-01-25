# Exemplo de Micro FrontEnd com Module Federation - Webpack 5

Module Federation é uma feature da versão 5 do webpack, e nos permite compartilhar dependência entre aplicações, definir quais módulos de outras aplicações serão consumidos e quais módulos são expostos em cada uma delas.

## Estrutura do Projeto

---- multiframework - Exemplo de micro frontend que pode utilizar versões e frameworks diferentes
------- shell - Módulo que engloba os demais micro frontends;
------- mfe1 - Micro frontend de exemplo desenvolvido em angular;
------- mfe2 - Micro frontend de exemplo desenvolvido em angular;
------- mfe3 - Micro frontend de exemplo desenvolvido em react;

---- angular - Exemplo de micro frontend utilizando somente angular na versão 13
------- shell - Módulo que engloba os demais micro frontends;
------- mfe1 - Micro frontend de exemplo desenvolvido em angular;
------- mfe2 - Micro frontend de exemplo desenvolvido em angular;

---- single-spa - Exemplo utilizando o framework single-spa. Dentro do projeto tem o seu próprio readme.

Todos podem ser executados separamente.

## Desenvolvimento

Crie o seu projeto Angular normalmente com o angular cli, por exemplo:
- ng new shell
- ng new mfe1
- ng new mfe2

Após criar os projetos desejados adicione o module-federation a eles, por exemplo:

- ng add @angular-architects/module-federation --project shell --port 4200
- ng add @angular-architects/module-federation --project mfe1 --port 4201
- ng add @angular-architects/module-federation --project mfe2 --port 4202

Em seguida instale a lib @angular/elements em todos eles:

- npm install @angular/elements

Com essa estrutura criada observe que no seu projeto será criado o arquivo **webpack.config.js** a qual iremos modificar mais adiante e será criado um construtor customizado utilizando o webpack dentro da CLI.

Abaixo segue os arquivos que precisam ser ajustados para configurar corretamente os micro frontends:

##### Angular:
1. Ajustar o app.module.ts
2. Ajustar webpack.config.js
3. Ajustar o bootstrap.ts
4. Ajustar o app-routing.module.ts
5. Ajustar o index.html

##### React:
1. Ajustar app.js
2. Ajustar package.json
3. Ajustar index.html

Observe os arquivos citados no repositório para comparar com o original e realizar as modificações necessárias.

## Links

https://medium.com/localizalabs/module-federation-o-futuro-do-microfrontend-4fed87983ec2

https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/

https://levelup.gitconnected.com/microfrontends-which-framework-to-use-457d5bed173e