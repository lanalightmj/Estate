const burgerMenu = document.querySelector('#burger-menu');
const mobiNav = document.querySelector('.header__mobile-nav');

burgerMenu.addEventListener('click', function(e) {
  e.preventDefault();
  burgerMenu.classList.toggle('header__humburger-menu--active');
  mobiNav.classList.toggle('header__mobile-nav--active');
})



const btnsBox = document.getElementById("requirments__inner-items");
const btns = btnsBox.getElementsByClassName("requirments__link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$('.requirments__link').click(function(e){
  e.preventDefault();
  // $('h4').text($(this).text());
$('.requirments__img').attr('src',$(this).attr('href'));
})


