# Conceito

Micro FrontEnd se trata de um conceito de arquitetura para aplicações frontend onde basicamente reutiliza o mesmo conceito de micro-serviços. A ideia é de separar sua aplicação de front em várias camadas menores, cada uma sendo responsável por um módulo específico da aplicação, você pode obter mais detalhes [aqui](https://micro-frontends.org/).

# Ferramentas

Para construirmos uma aplicação utilizando desse conceito existem algumas abordagens possíveis:

1. Utilizando de web-components;

2. Desenvolver cada módulo separado e disponibilizar em uma rota onde via proxy reverso você agregue todos os módulos em uma URL final.

3. E a forma que iremos abordar que é utilizando o [single spa](https://single-spa.js.org/docs/getting-started-overview) que é uma estrutura para reunir vários micro frontends JavaScript em um aplicativo front único.

# Desenvolvimento

Você pode usar o Angular e o single spa juntos com qualquer versão do Angular. Para isso crie a sua aplicação angular e siga os passos [Angular + Single Spa](https://single-spa.js.org/docs/ecosystem-angular/#angular-cli) para adicionar o single spa na sua aplicação.

Obs.: No arquivo index.ejs add na tag meta Content-Security-Policy o valor img-src 'self' data:; para funcionar corretamente as imagens img-src data.

# Links

[Angular - Configurando e Executando aplicações micro-frontends com single-SPA](https://medium.com/guide-lab/angular-configurando-e-executando-aplica%C3%A7%C3%B5es-micro-frontends-com-single-spa-99b488e6c70)

[Micro Frontends com single-spa e react - vídeo](https://www.youtube.com/watch?v=gcztgrI-MlM)
1:15:00 - Explicando sobre os testes

[Micro Frontends com single-spa e react - artigo](https://www.zenvia.com/blog/developers/micro-frontends/)

[Micro-Frontends Using Single-SPA Framework](https://www.kushki.com/en/blog/micro-frontends-utilizando-single-spa-framework)