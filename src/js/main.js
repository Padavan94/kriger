/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/parallax.js/parallax.min.js

/*
    Custom
 */
//= partials/helper.js
//= partials/owl.carousel.js
//= partials/jquery.magnific-popup.min.js
//= partials/waypoints.js
//= partials/animate.js

function forSVG() {
    $('.svg').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
}





$(document).ready(function() {
	forSVG();


	$('.parallax-window').parallax({imageSrc: '/img/big.jpg'});
	$('.parallax-window2').parallax({imageSrc: '/img/big2.jpg'});
	$('.parallax-window3').parallax({imageSrc: '/img/map.jpg'});



	//owl carousel manipulation

	var owl = $('.owl-carousel');
	var owl2 = $(".owl-carousel2");


	owl.owlCarousel({
	    loop:true,
	    margin:40,
	    autoplay: true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	})

	owl2.owlCarousel({
	    autoplay: true,
	    autoplayHoverPause: true,
	    items: 1,
	})


	$('.filter2').on('click', function (event) {
		event.preventDefault();
		$(".filter2").removeClass('active');
		$(this).addClass('active')
		var param = $(this).attr("param");
		console.log(param);
	    html = getHtml(param);
	    if( $(this).hasClass('filter') ) {
	    	owl.trigger('replace.owl.carousel', html)
	        .trigger('refresh.owl.carousel');
	    } else {
	    	owl2.trigger('replace.owl.carousel', html)
	        .trigger('refresh.owl.carousel');
	    }  
	});	

	// filter text

	$('.filter').click(function(event) {
		event.preventDefault();
		$(".filter").removeClass('active');
		$(this).addClass('active');
		var param = $(this).attr("param");
		$(".our-services__descr").removeClass('active');
		$(".our-services__descr").each(function(index, el) {
			if( $(this).hasClass(''+param) ) {
				$(this).addClass('active');
			}
		});

	});


	// magnific

	$(".certificates__item").magnificPopup({
	  type:'image',
	  midClick: true,
	  gallery:{
	    enabled:true
	  }
	});

	//animate css section


	$(".capabilities__circles-circle").animated("fadeInDown", "fadeOutDown");
	$(".capabilities__circles-descr").animated("fadeInUp", "fadeOutDown");
	$(".capabilities__item").animated("fadeInLeft capabilities__item--green", "fadeOutLeft");
	$(".calculator").animated("fadeInLeft", "fadeOutLeft");
	$(".our-advantages").animated("fadeInRight", "fadeOutLeft");
	$(".title").animated("zoomIn", "zoomOut");
	$(".how-we-work__step__circle").animated("fadeInLeft", "fadeOutRight");
	$(".how-we-work__step__descr").animated("fadeIn", "fadeOut");



});














//get html
	function getHtml(param) {
		var html;
		switch (param) {
			case "waterCotl" : 
				html = '<div class="our-services__catalog__item">' +
							'<img src="/img/service1.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service3.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service4.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>';

				break;

			case "waterCotl2" : 
				html = '<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>';
				break;
			case "waterCotl3" : 
				html = '<div class="our-services__catalog__item">' +
							'<img src="/img/service1.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service1.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service1.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service1.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>';
				break;
			case "waterCotl4" : 
				html = '<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>';
				break;
			case "waterCotl5" : 
				html = '<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>';
				break;
			case "waterCotl6" : 
				html = '<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>' +
						'<div class="our-services__catalog__item">' +
							'<img src="/img/service2.png" alt="service">' +
							'<div class="our-services__catalog__item-name">услуга</div>' +
							'<div class="our-services__catalog__item-description">' +
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' +
							'</div>' +
						'</div>';
				break;

				// cases for owl2

				case "type1" : 
					html = html = $(".type-1").html();
					break;

				case "type2" : 
					html = $(".type-2").html();
					break;


				case "type3" : 
					html = $(".type-3").html();
					break;

				case "type4" : 
					html = $(".type-4").html();
					break;

			default: 
				alert('не очень работает');
		}
		return html;
	}