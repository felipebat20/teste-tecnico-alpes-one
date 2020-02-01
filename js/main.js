$('.projetos').slick({

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
});

$('.knowledge').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 1,

    // autoplay: true,
    // autoplaySpeed: 100,
    // dots: true,
    // infinite: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '400px',
                slidesToShow: 1
            }
        }
    ]
});