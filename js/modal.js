
var overlay = $('.modals__overlay')
var cardBtn = $(".gallery__card-btn");
var modal = $(".gallery-modal");
var close = $(".gallery-modal__close");
var thanks = $(".modal-thanks");
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');

let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
	let pagePosition = window.scrollY;
  fixBlocks.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	body.style.paddingRight = paddingOffset;
	body.classList.add('disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disable-scroll');
  fixBlocks.forEach((el) => {
		el.style.paddingRight = '0px';
	});
	body.style.paddingRight = '0px';
	window.scroll({top: pagePosition, left: 0});
	body.removeAttribute('data-position');

}

cardBtn.on("click", function () {

	img = $(this).parent().find(".gallery__card-image").attr("src");
	imgAlt = $(this).parent().find(".gallery__card-image").attr("alt");
	subtitle = $(this).parent().find(".gallery__card-subtitle").html();
	namePicture = $(this).parent().find(".gallery__card-name").html();
	data = $(this).parent().find(".gallery__card-subds").html();
	descr = $(this).parent().find(".gallery__card-des").html();

	$(".gallery-modal__img").attr("src", img);
	$(".gallery-modal__img").attr("alt", imgAlt);
	$(".gallery-modal__subtitle").html(subtitle);
	$(".gallery-modal__name").html(namePicture);
	$(".gallery-modal__subdes").html(data);
	$(".gallery-modal__des").html(descr);

	if (overlay.css("display") == "none") {

	disableScroll();

		overlay.addClass('modals__overlay--open');
		modal.addClass('gallery-modal--open');
		setTimeout(function () {
			overlay.addClass('in');
			modal.addClass('in');
		}, 15);
	}
	else {

		enableScroll();

		modal.removeClass('in');
		overlay.removeClass('in');
		modal.one('transitionend', function (e) {
			modal.removeClass('gallery-modal--open');
		});
		overlay.one('transitionend', function (e) {
			overlay.removeClass('modals__overlay--open');
		});
	}
});


close.on("click", function () {
	enableScroll();
	modal.removeClass('in');
	overlay.removeClass('in');
	modal.one('transitionend', function (e) {
		modal.removeClass('gallery-modal--open');
	});
	overlay.one('transitionend', function (e) {
		overlay.removeClass('modals__overlay--open');
	});
	return false;
});

overlay.on("click", function (event) {

	enableScroll();

	e = event || window.event;
	if (e.target == this) {
		modal.removeClass('in');
		modal.one('transitionend', function (e) {
			modal.removeClass('gallery-modal--open');
		});
		overlay.one('transitionend', function (e) {
			overlay.removeClass('modals__overlay--open');
		});
	}
});

function thanksPopup() {
	var val = $('#user-name').val();
	$('.modal-thanks__title').html(val + ', cпасибо за заявку!');
		thanks.addClass('modal-thanks--open');
		setTimeout(function () {
			thanks.addClass('in');
		}, 15);
		setTimeout(function(){
			$('.modal-thanks').delay(1800).fadeOut(700).removeClass('in');
			thanks.removeClass('modal-thanks--open');
		},1800);
}
