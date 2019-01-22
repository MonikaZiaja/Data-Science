var fontGraduate = document.querySelectorAll('.fa-user-graduate');
var txtGraduate = document.querySelectorAll('.step__text');
var fonts = [...document.querySelectorAll('.fa-user-graduate')];
var txts = [...document.querySelectorAll('.step__text')];
var txtGraduateList = [{
    
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
   

var attachstepClickHandler = function(step, index){
     step.onclick = function() {
        var activestep = fonts.findIndex(step => step.classList.contains('active'));
        fonts[activestep].classList.remove('active');
        this.classList.add('active');
        
        document.querySelector('.step__text--title').textContent = txtGraduateList[index].title;
        document.querySelector('.step__text--p').textContent = txtGraduateList[index].text;
        if(window.innerHeight > window.innerWidth || window.innerWidth <= 700){
                $('body, html').animate({
                    scrollTop: $('.studyDegrees__text').offset().top - 100
                })
            }
        
           
         
     }
 }
var initstepsClickHandlers = () => {
     for (var i = 0; i < fonts.length; i++) {
         attachstepClickHandler(fonts[i], i);
     }
 }


initstepsClickHandlers();


//   menu mobile


$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y < 800) {
        document.querySelector('.arrowUp').style.display = "none";
    } else {
        document.querySelector('.arrowUp').style.display = "block";
    }
});
var arrowDown = document.querySelectorAll('.fa-bars, .fa-times, .mainNav__item.mobile');

var offElements__arrowDown = document.querySelectorAll('.fa-times, .fa-bars, .mainNav__list')
var mobileElements = document.querySelectorAll('.mainNav__item')

for (var i = 0; i < arrowDown.length; i++) {
    arrowDown[i].onclick = function() {
        offElements__arrowDown.forEach(function(element) {
            element.classList.toggle('off');
            
        })
        mobileElements.forEach(function(element) {
            element.classList.toggle('mobile');
            
        })
    };
}
$('.fa-bars').on('click', function(){
    $('.arrowUp').hide();
})
$('.fa-times').on('click', function(){
    $('.arrowUp').show();
})
// Scroll
$('.mainNav__item').on('click', function () {
    var goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 64
    })
    offElements__arrowDown.forEach(function(element) {
        element.classList.toggle('off');
        
    })
})
// arrow scroll
$(window).scroll(() => {
    var wScroll = $(this).scrollTop();
    $('.mainHeader__box').css({
        'transform': 'translateY(' + wScroll / 10 + '%)'
    });
    // $('.mainHeader__btn--transparent').css({
    //     'transform': 'translate(calc(50vw - 50%),' + wScroll/10  + '%)',
    //     'background': 'rgb(218, 72, 47)',
    //     'color': 'white'
    // });
  
});
$('.mainHeader__btn--transparent').on('click', function(){
    var y = $(window).scrollTop();
 $('html, body').animate({ scrollTop: y + window.innerHeight/1.2})
})
$('.arrowUp, .mainNav__logo--uwr').on("click",function(){
    $(window).scrollTop(0);
});

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
               
        }
    }
    rawFile.send(null);
}
}