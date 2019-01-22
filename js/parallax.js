$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll > $('.mainHeader').offset().top - screen.height){
        $('.section__1--title').addClass('section__1--titleShow')
        $('.btn--transparent').addClass('btn--transparent--color')

    }
    if(wScroll > $('.skill__title').offset().top){
        $('.skills__item').each(function(i){
            setTimeout(function(){

                $('.skills__item').eq(i).addClass('skills__item--show');
            }, 250*(i+1));
        });
    }

    if(wScroll > $('.skill__title').offset().top - screen.height/2){
        $('.skill__title').addClass('skill__title--show')
    }
    if(wScroll > $('.sectionLecturers').offset().top){
        $('.titleLecturers').addClass('.titleLecturers--show')
    }
    if(wScroll > $('.recruit__title').offset().top - screen.height/2){
        $('.recruit__title').addClass('recruit__title--show')
    }
    if(wScroll > $('.recruit__txt').offset().top - screen.height/2){
        $('.recruit__txt').addClass('recruit__txt--show')
    }
});
