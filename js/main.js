var windowWidth = $(window).width();

// открытие поиска
$(function () {
	$('#search__btn').click(function() {
		$('#search__btn').toggleClass('search-active');
		$('.search__wrapper').toggleClass('search-active');

		return false;
	});

	$('#search__btn--open').click(function() {
		$('#search__btn').removeClass('search-active');
		$('.search__wrapper').removeClass('search-active');

		return false;
	});

	if (windowWidth < 980) {
		$('#search__btn').click(function() {
			$('#search--mob').toggleClass('container');
		});
	}
});

// якорные ссылки
$('.nav__link, .hero__btn').click(function() {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
	return false;
});

// открытие меню
$(function () {
	$('.burger').click(function() {
		$('.menu').fadeIn('500', function () {
			$('.menu').addClass('menu-open');
		});
	});

	$('.btn-close').click(function() {
		$('.menu').fadeOut('500', function() {
			$('.menu').removeClass('menu-open');
		});
	});

	$('.menu__nav-link').click(function() {
		$('.menu').fadeOut('500', function() {
			$('.menu').removeClass('menu-open');
		});
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});

});

$(document).click(function (e) {
	if (!$('.burger').is(e.target) && !$('.menu').is(e.target) && $('.menu').has(e.target).length === 0) {
		$('.menu').fadeOut('500', function () {
			$('.menu').removeClass('menu-open');
		});
	}
});

$(function () {
	$('.category__btn').click(function () {
		$('.category__btn').removeClass('active');
		if ($(this).next('.category__dropdown').css("display") == "none") {
			$('.category__dropdown').hide('normal');
			$(this).next('.category__dropdown').toggle('normal');
			$('.category__btn').removeClass('active');
			$(this).toggleClass('active');
		} else $('.category__dropdown').hide('normal');
	});

	$('.category__dropdown').on('mouseleave', function () {
		$('.category__dropdown').hide('normal');
		$('.category__btn').removeClass('active');
		return false;
	});

});

$(function () {
	if (windowWidth < 720) {
		$(".edition__check-list").clone().appendTo(".edition__details");
	}
});

const NewSelect = () => {
	const element = document.querySelector('#gallerySelect');
	const choices = new Choices(element, {
		searchEnabled: false,
		shouldSort: false,
		placeholder: true,
	});

	let ariaLabel = element.getAttribute('aria-label');
	element.closest('.choices').setAttribute('aria-label', ariaLabel);
};
NewSelect();

$('.tab__item:nth-child(3)').addClass('tab-open');
$('.catalog__row').removeClass('content-open');
$('.catalog__row:nth-child(3)').addClass('content-open');

$('.tab__item').click(function () {
	$('.tab__item').removeClass('tab-open');
	$(this).addClass('tab-open');
	$('.catalog__row').addClass('content-open');
	$('.catalog__row').hide();

	var activeTab = $(this).find('a').attr('href');
	$(activeTab).fadeIn();

	return false;
});

$(function () {
	var icons = {
		header: "ui-icon-circle-arrow-e",
		activeHeader: "ui-icon-circle-arrow-s"
	};

	$(".accordion").accordion({
		active: 0,
		icons: icons,
		collapsible: true,
		heightStyle: 'content'
	});

	$(".accordion").accordion("refresh");
});

$('.accordion__list > li').click(function(){
	var tab_id = $(this).attr('data-tab');
	$('.accordion__list > li').removeClass('current');
	$('.catalog__card').removeClass('current');
	$(this).addClass('current');
	$("#"+tab_id).addClass('current');

	return false;
});

var max_chars = 5;
$('input[type=number]').keydown(function (e) {
	if ($(this).val().length >= max_chars) {
		$(this).val($(this).val().substr(0, max_chars));
	}
});

$('input[type=number]').keyup(function (e) {
	if ($(this).val().length >= max_chars) {
		$(this).val($(this).val().substr(0, max_chars));
	}
});

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.contact__form', {
	rules: {
		name: {
			required: true,
			minLength: 2,
			maxLenght: 20,
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector.Inputmask.unmaskedvalue();
				return Number(phone) && phone.length === 10;
			}
		},
	},

	messages: {
		name: ' ',
		tel: ' ',
	}
});

ymaps.ready(init);
function init() {

	var myMap = new ymaps.Map("map", {
		center: [55.758463, 37.601079],
		zoom: 16,
		controls: [],
	}, {
		searchControlProvider: 'yandex#search'
	});

	var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'icon/metka.png',
		iconImageSize: [20, 20],
		iconImageOffset: [-5, -5]
	});

	myMap.geoObjects.add(myPlacemark);
}

function myFunction() {
}





