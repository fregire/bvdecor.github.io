$(document).ready(function () {
	// Page - shop - переключение товаров
$('.shop__row').on('click', function() {
	$('.featured__item').removeClass('featured__item_shop-page');
	$('.featured__img').removeClass('fetaured__img_shop-page');
	$('.featured__wrapper').addClass('featured__wrapper_start');
	$('.featured__item').css('flex-basis', '28rem');
});
$('.shop__column').on('click', function() {
	$('.featured__item').addClass('featured__item_shop-page');
	$('.featured__wrapper').removeClass('featured__wrapper_start');
	$('.featured__img').addClass('fetaured__img_shop-page');
	$('featured__wrapper').css('flex-direction', 'column');
	$('featured__wrapper').css('justify-content', 'flex-start');
	$('.featured__item').css('flex-basis', '90%');
});
// Адаптивное меню
$('.header__mobile').on('click', function() {
	$('.header__nav').slideToggle(300, function() {
		if($(this).css('display') === 'none') {
		$(this).removeAttr('style');
		}
	});
});
// Проверка для двух колонок, чтобы сделать их такими
if(screen.width <= 768) {
	var hovMenu = document.querySelectorAll('.hover-menu');
	for (var i = 0; i < hovMenu.length; i++) {
		hovMenu[i].style.width = '100%';
		hovMenu[i].style.top = '45px';
		for (var o = 0; o < hovMenu[i].children.length; o++) {
			hovMenu[i].children[o].style.width = '100%';
		};
	};

} else {
	var allHov = $(".hover-menu");
	for (var i = 0; i <allHov.length; i++) {
		if($(allHov[i]).children('li').length >= 10) {
			allHov[i].style.width = '500px';
			console.dir(allHov[i].children.length);
			for (var o = 0; o < allHov[i].children.length; o++) {
				allHov[i].children[o].style.display = 'inline-block';
				allHov[i].children[o].style.width = '49%';
			};

		}
	};
}

// Меню для мобильных
$('.link').on('click', function() {
	$(this).siblings('.hover-menu').slideToggle(300);
});
// Поиск в шапке
$('.decor__search').on('click', function() {
	$('.decor__search-link').css('display', 'none');
	$('.decor__input').css('display', 'block');
	$('.decor__input').focus();
	$('.decor__input').on('blur', function() {
		$('.decor__input').css('display', 'none');
		$('.decor__search-link').css('display', 'inline-block');
	});
});
// Категории 
$('.shop__categ-name').on('click', function() {
	$(this).children('.shop__sub-categ').slideToggle(300, function() {
		if($(this).css('display') === 'none') {
			$(this).removeAttr('style');
		}
	});
});
// Для продуктов
$(".products__choose").slideUp(500);
$(".products__wrapper .products__item").click(function() {
	if($(this).hasClass('activeProd')) {
		$('.products__choose').slideUp(300);
		$(this).children('.product__name').slideUp(300);
		$(this).children('.products__overlay').css('background', 'rgba(0,0,0,.8)');
		$(this).removeClass('activeProd');
	} else {
		$(".products__wrapper .products__item").removeClass("activeProd").eq($(this).index()).addClass("activeProd");
		$(".products__choose").hide().eq($(this).index()).slideDown(500);
	}
	
}).eq(0).addClass("active");

$('.products__close').on('click', function() {
	$('.products__choose').slideUp(300);
	$(".product__name").slideUp(300);
	$('.products__overlay').css('display', 'block');
	$('.products__overlay').removeAttr('style');
	$('.products__name').css('color', 'white');
	$('.products__overlay').css('background', 'rgba(0, 0, 0, .8)');
});


// Слайдер галереи
var slide = $('.slick ').slick({
	centerMode: true,
	infinite: true,
	slidesToShow: 3,
	autoplay: false,
	centerPadding: '50px',
	arrows: true,
	prevArrow: '<span class="arrowPrev"></span>',
	nextArrow: '<span class="arrowNext"></span>',
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			centerMode: false,
		}
	}]
});
// Галерея
$('#interior').on('click', function() {
	$('.slick').slick('slickGoTo', 0);
	var overlay = $("#interior_overlay");
	overlay.css('display', 'none');
	var time = setInterval(function(){
     	overlay.css('display', 'block');
   }, 1);
	setTimeout(function() {
		clearInterval(time);
		overlay.css('display', 'none');
		overlay.removeAttr('style');
	}, 3000);

});
$('#exterior').on('click', function() {
	$('.slick').slick('slickGoTo', 1);
	var overlay = $("#exterior_overlay");
	overlay.css('display', 'none');
	var time = setInterval(function(){
     	overlay.css('display', 'block');
   }, 1);
	setTimeout(function() {
		clearInterval(time);
		overlay.css('display', 'none');
		overlay.removeAttr('style');
	}, 3000);
	
});
$('#led').on('click', function() {
	$('.slick').slick('slickGoTo', 2);
	var overlay = $("#led_overlay");
	overlay.css('display', 'none');
	var time = setInterval(function(){
     	overlay.css('display', 'block');
   }, 1);
	setTimeout(function() {
		clearInterval(time);
		overlay.css('display', 'none');
		overlay.removeAttr('style');
	}, 3000);
	
});
// Слайдер товаров при мальеньком разрешении экранов
$('.featured__slick').slick({
	slidesToShow: 3,
	prevArrow: '<span class="arrowPrev"></span>',
	nextArrow: '<span class="arrowNext"></span>',
	responsive : [{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,

			}
		}]
	});
 
// Magnific Popup
$('.galery__item').magnificPopup({
  type: 'image',
  mainClass: 'mfp-fade',
  removalDelay: 350,	
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 	}
  
});

//Продукты на главной 
// var allItems = $('.products__item');
// $('.products__item').on('click', function() {
// });
// Главный слайдер 
$(".owl-carousel").owlCarousel({
	pagination: true,
	navigation: false,
	items: 1,
	itemsDesktop: [1199, 1],
	itemsDesktopSmall: [980, 1],
	itemsTablet: [768, 1],
	itemsMobile: [479, 1],
});

});