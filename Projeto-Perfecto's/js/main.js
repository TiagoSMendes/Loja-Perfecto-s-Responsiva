(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
        
    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024 
    })
    
    var carouselImgs = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    
    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    // Depoimentos trocam sozinhos a cada 6 segundos
    // (respeita quem prefere menos movimento na tela)
    var reduzirMovimento = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(!reduzirMovimento){
        setInterval(carouselQuotes.next, 6000)
    }
})()