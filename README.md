# Protótipo de Website seguindo um Guia de Estilo de autoria
---
**Aluno:** Ícaro Araújo Barros

**Turma:** CC1M

**Professor:** Ricardo Mendes Costa Segundo

---
# Descrições
A pagina Index.html é o protótipo da home, e seus arquivos de estilização foram separadas em style.css, footer.css e slider.css, sendo as duas ultimas referentes a secções especificas onde eu desejei organizar de forma separada.

Referente aos scripts, há essencialmente dois scripts com uso no HTML. O de slideshow e o de Navbar responsiva

## O slidershow:
```Javascript
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);
```
Esta é uma função simples que usa funções da livraria Jquery. Os slideshows estão compostos dentro de uma div com o id de #slideshow, que engloba outras divs onde estarão as imagens do slide. 
Dado um intervalo que é criado pela função setInterval, neste caso, diz que a cada 3 segundos a função descrita será chamada. [...]
```Javascript
  setInterval(function(),3000);
```
Na função, a primeira div dentro da div #slideshow é chamada, por ser o indice zero, ou primeiro filho. 
Nela, a função fadeOut do jQuery será aplicada, fazendo ela desaparecer gradualmente, logo após ela vai passar essa função para o outro valor, ou seja, a outra div em seguida. Nessa outra div, a função fadeIn do Jquery será chamada, fazendo com que ela apareça gradualmente, e essa div será devolvida pra função function() novamente, para que após ela continue a "percorrer" as divs filhas da div #slideshow.

## O Navbar
```Javascript
class MobileNavbar{
  constructor(burgerMenu, navList, navLinks){
    this.burgerMenu = document.querySelector(burgerMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    //Para não perder a referencia. O javascript deve se referir ao objeto e não a classe html
    this.handleClick = this.handleClick.bind(this); 
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick(){
    //tira e põe o active da class
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
    this.burgerMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }


  addClickEvent(){
    this.burgerMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if(this.burgerMenu){
      this.addClickEvent();
    }
    return this;
  }
}


const mobileNavbar = new MobileNavbar(".burgerMenu",".nav-list",".nav-list li");

mobileNavbar.init();
```
Dentro do css, há um mediaQuery, que diz que quando a tela for abaixo de dado tamanho, propriedades da barra de navegação mudam, e um botão .burgerMenu aparece, para que este possa chamar diversas funções do javascript, com finalidades diferentes.

Nesse javascript primeiro criamos uma classe, que construímos e declaramos a que elementos do html se referem na construção [...]
```Javascript
  constructor(burgerMenu, navList, navLinks){
    this.burgerMenu = document.querySelector(burgerMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    //Para não perder a referencia. O javascript deve se referir ao objeto e não a classe html
    this.handleClick = this.handleClick.bind(this); 
  }
 ```
 e na declaração [...]
 ```Javascript
 const mobileNavbar = new MobileNavbar(".burgerMenu",".nav-list",".nav-list li");
 ```
Nessa const observa-se que: burgerMenu é o botão hamburguer que abre a nav, nav-list é o container dos meus "botões", e nav-list li são os itens de lista que ajem como botões (com um elemento proprio contendo links dentro de cada item de lista).
No meu construtor [...]
 ```Javascript
this.activeClass = "active";
 ```
é referente a keyframes, ou estados em que a classe pode estar (ex: nav-list.active) com o intúito de fazer animações.
E [...]
```Javascript
this.handleClick = this.handleClick.bind(this); 
```
É para que o HTML não perca a referencia desse objeto, e possa continuar a aplicar essas funções lidando com esse objeto, que refere a classe no html

No mais[..]
```Javascript
  addClickEvent(){
  this.burgerMenu.addEventListener("click", this.handleClick);
}

init(){
  if(this.burgerMenu){
    this.addClickEvent();
  }
  return this;
}
```
addClickEvent é o método para interpretar o clique e chamar os outros métodos, init() é apenas para checar se tudo aqui já não está já chamado/em uso, por precaução.

Os métodos que são chamados e realmente fazem algo visualmente acontecer no HTML são [...]
```Javascript
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick(){
    //tira e põe o active da class
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
    this.burgerMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }
  ```
handleClick() muda a classe para .active ou reverte o mesmo (toggle), fazendo que os keyframes declarados no css façam suas animações como por exemplo a de translação, trazendo a navBar de fora do body (neste caso ele está com propriedade hidden no eixo X) para dentro do body.

animateLinks() faz animações referentes a opacidade dos links, mas ao percorrer os links da lista, esta função aumenta levemente a quantidade de tempo (ou ease) para que o item apareça, fazendo assim uma animação ainda mais suave.

---
## Construído com

* Visual Studio Code

## Autor

[Ícaro Araújo Barros](https://github.com/Icaro-tme)

  
