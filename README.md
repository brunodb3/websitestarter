# Website Starter

Um projeto template para websites baseado em AngularJS. Desenvolvido por Bruno Duarte Brito.

Consiste em:

  * [Template Website](https://github.com/brunodb3/websitestarter)

> Este projeto foi desenvolvido Bruno Duarte Brito mantendo em mente o código open-source.
> Baseado no projeto [Healthy Gulp Angular](https://github.com/paislee/healthy-gulp-angular) pelo usuário ```paislee``` do GitHub.

### Versão
2.0.0

### Tecnologia envolvida

Lista de tecnologias e linguagens de programação envolvidas:

* [Gulp](http://gulpjs.com/)
* [Bower](https://bower.io/)
* [NodeJS](https://nodejs.org)
* [JavaScript](http://www.w3schools.com/js/)
* [AngularJS - versão 1](https://angularjs.org/)
* [CSS3](http://www.w3schools.com/css/css3_intro.asp)
* [HTML5](http://www.w3schools.com/html/html5_intro.asp)

### Instalação

Antes de baixar o repositório, tenha certeza que sua máquina possui [NodeJS](https://nodejs.org/en/), [Gulp](http://gulpjs.com/) e [Bower](https://bower.io/).

Clone o repositório em sua máquina:

```sh
$ git clone [url-do-repositorio]
$ cd websitestarter
```

Então, prepare a plataforma, baixe os módulos e abra o projeto no navegador:

```sh
$ npm install # instala todos os módulos do npm
$ gulp watch-dev # abre o projeto em modo desenvolvimento no browser (servidor local)
```

Os arquivos do website estarão na pasta ```app```.

### Produção

Para realizar a build final do projeto (versão para produção, minificada), execute o seguinte comando:

```sh
$ gulp # realiza a build final do projeto, na pasta ```dist.prod```
```

Os arquivos minificados e prontos para envio ao servidor estarão na pasta ```dist.prod```.

Para abrir um servidor local em modo produção, basta executar:

```sh
$ gulp watch-prod
```

*Para saber mais sobre o processo de build utilizado, visite [Healthy Gulp Angular](https://github.com/paislee/healthy-gulp-angular), do usuário ```paislee``` do GitHub.*

**Bruno Duarte Brito - 2016**