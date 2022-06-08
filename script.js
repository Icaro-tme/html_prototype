//onload = init, para evitar problemas com o script declarado no head


// function error(){
//   alert("error");
// }


// function goToLink(path){
    
//     var myDomain = 'http://localhost:8080';
//     window.location.href = myDomain + "/" + path;
// }

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);


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
