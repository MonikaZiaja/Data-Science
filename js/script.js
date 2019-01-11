const fontGraduate = document.querySelectorAll('.fa-user-graduate');
const txtGraduate = document.querySelectorAll('.step__text');
const fonts = [...document.querySelectorAll('.fa-user-graduate')];
const txts = [...document.querySelectorAll('.step__text')];
const txtGraduateList = [{
    
    title: 'Studia I stopnia - licencjackie',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero magna, congue non dui ac, tempor malesuada purus. Nunc id suscipit tortor, nec faucibus felis. Nunc vestibulum, libero at faucibus interdum, augue dui condimentum nibh, ac interdum nisi ligula a magna. Phasellus quis consequat magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
   },
   {
    
    title: 'Studia II stopnia - magisterskie',
    text: 'Vivamus non semper dolor. Ut est urna, sollicitudin ac sagittis ac, aliquet vitae purus. Phasellus quam lectus, suscipit in orci vel, aliquam lacinia libero. Etiam sagittis erat a ex tristique, non interdum nibh rutrum.'
   },
   {
    
    title: 'Studia III stopnia - doktoranckie',
    text: 'Sed tempus nibh et massa elementum condimentum. Cras id sagittis odio. Sed ultrices nibh quis porttitor tempus. Proin tincidunt nisi nunc. Pellentesque non fermentum tellus. Morbi malesuada ex nec risus viverra consectetur. Fusce iaculis dui lacinia ornare venenatis. Pellentesque faucibus iaculis elit quis rutrum. '
   }];
   

const attachstepClickHandler = function(step, index){
     step.onclick = function() {
        const activestep = fonts.findIndex(step => step.classList.contains('active'));
        fonts[activestep].classList.remove('active');
        this.classList.add('active');
        console.log(index);
        document.querySelector('.step__text--title').textContent = txtGraduateList[index].title;
        document.querySelector('.step__text--p').textContent = txtGraduateList[index].text;
           
         
     }
 }
 const initstepsClickHandlers = () => {
     for (var i = 0; i < fonts.length; i++) {
         attachstepClickHandler(fonts[i], i);
     }
 }


initstepsClickHandlers();


//   menu mobile
const arrowDown = document.querySelectorAll('.fa-bars, .fa-times, .mobile');

const offElements__arrowDown = document.querySelectorAll('.arrowUp, .fa-times, .fa-bars, .mainNav__list')
const mobileElements = document.querySelectorAll('.mainNav__item')

for (let i = 0; i < arrowDown.length; i++) {
    arrowDown[i].onclick = function() {
        offElements__arrowDown.forEach(function(element) {
            element.classList.toggle('off');
            
        })
        mobileElements.forEach(function(element) {
            element.classList.toggle('mobile');
            
        })
    };

}

// $('.mainNav__link--arrow, .mainNav__link--off').on('click', addOffClass);

// Scroll
$('.mainNav__item').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 64
    })
})
// arrow scroll
$(window).scroll(() => {
    var wScroll = $(this).scrollTop();
    $('.mainHeader__box').css({
        'transform': 'translateY(' + wScroll / 10 + '%)'
    });
    $('.mainHeader__btn--transparent').css({
        'transform': 'translate(calc(50vw - 50%),' + wScroll/10  + '%)',
        'background': 'rgb(218, 72, 47)',
        'color': 'white'
    });
  
});
$('.mainHeader__btn--transparent').on('click', function(){
    var y = $(window).scrollTop();
 $('html, body').animate({ scrollTop: y + window.innerHeight/1.2})
})
$('.arrowUp, .mainNav__logo').on("click",function(){
    $(window).scrollTop(0);
});