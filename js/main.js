
var windowWidth = $(window).width();

$(function () {
	$('#search__btn').click(function () {
		$('#search__btn').toggleClass('search-active');
		$('.search__wrapper').toggleClass('search-active');

		return false;
	});

	$('#search__btn--open').click(function () {
		$('#search__btn').removeClass('search-active');
		$('.search__wrapper').removeClass('search-active');

		return false;
	});

	if (windowWidth < 980) {
		$('#search__btn').click(function () {
			$('#search--mob').toggleClass('container');
		});
	}
});

$('.burger').click(function () {
	$('.burger').toggleClass('burger--active');
	$('.menu-header').toggleClass('menu-header--active');
});

$(document).click(function (e) {
	if (!$('.burger').is(e.target) && !$('.menu-header').is(e.target) && $('.menu-header').has(e.target).length === 0) {
		$('.menu-header').removeClass('menu-header--active');
		$('.burger').removeClass('burger--active');
	}
});

$('.nav__link, .hero__btn').click(function () {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
	return false;
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

document.addEventListener('DOMContentLoaded', () => {
	const tab = document.querySelector('.catalog');
	const tabBtn = document.querySelectorAll('.tab__btn');
	const tabContent = document.querySelectorAll('.catalog__row');

	if (tab) {
		tab.addEventListener('click', (e) => {
			if (e.target.classList.contains('tab__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabBtn.forEach(el => { el.classList.remove('tab__btn--active') });
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tab__btn--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabContent.forEach(el => { el.classList.remove('catalog__row--active') });
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('catalog__row--active');
	};

	const catalogRow = document.querySelector('.catalog__row');

	if (tabContent) {
		tabContent.forEach(el => {
			let currentContent = el;
			const linkContent = currentContent.querySelectorAll('.catalog__card');
			const linkAccordion = currentContent.querySelectorAll('.accordion__link');

			el.addEventListener('click', (e) => {
				e.preventDefault();
				if (e.target.classList.contains('accordion__link')) {
					const linkPath = e.target.dataset.linkPath;
					linkAccordion.forEach(el => { el.classList.remove('accordion__link--active') });
					document.querySelector(`[data-link-path="${linkPath}"]`).classList.add('accordion__link--active');
					linkHandler(linkPath);
				}
				return false
			});

			const linkHandler = (path) => {
				linkContent.forEach(el => { el.classList.remove('catalog__card--active') });
				document.querySelector(`[data-link-target="${path}"]`).classList.add('catalog__card--active');
			};
		})
	}
});

$(document).ready(function () {

	if ($(window).width() > 980) {
		var numToShow = 3;
	}
	if ($(window).width() < 980) {
		var numToShow = 2;
	}
	if ($(window).width() < 600) {
		var numToShow = 6;
	}

	var list = $(".cards__list li");
	var button = $(".event__btn");
	var numInList = list.length;
	list.hide();
	if (numInList > numToShow) {
		button.show();
	}
	list.slice(0, numToShow).show();

	button.click(function () {
		var showing = list.filter(':visible').length;
		list.slice(showing - 1, showing + numToShow).fadeIn();
		var nowShowing = list.filter(':visible').length;
		if (nowShowing >= numInList) {
			button.hide();
		}
	});

});

const checkboxTitle = document.querySelector('.checkbox__title');
const checkboxList = document.querySelector('.checkbox__list');

checkboxTitle.addEventListener('click', () => {
	checkboxTitle.classList.toggle('checkbox__title--active');
	checkboxList.classList.toggle('checkbox__list--active');
});


$(document).ready(function() {
	$('.checkbox__item:nth-child(4)').children().children().trigger('click');
});

$('.checkbox__input').click(function () {
	var el = $(this);

	if (el.prop('checked')) {
		$('.checkbox__filter').append('<span class="checkbox__name checkbox__name--added" valu="'+el.val()+'">'+ el.val()+'</span>');
	}
	else {
		$('[valu="' + el.val() + '"]').remove();
	}

});

$('.checkbox__btn').click(function () {
	$('.checkbox__input').prop('checked', false);
	$('.checkbox__name--added').remove();
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
