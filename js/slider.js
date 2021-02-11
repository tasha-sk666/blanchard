
const projectSlider = document.querySelector('.project__slider-container')
var mySwiperProject = new Swiper(projectSlider, {
	navigation: {
		nextEl: '.project__swiper-button-next',
		prevEl: '.project__swiper-button-prev',
	},
	spaceBetween: 50,
	loop: true,
	slideClass: 'project__card',
	breakpoints: {
		1650: {
			slidesPerView: 3,
		},
		520: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		}
	},
	observer: true,
	observeParents: true,
})

const heroSlider = document.querySelector('.hero__slider-container')
var mySwiperHero = new Swiper(heroSlider, {
	slideClass: 'hero__slide',
	slidesPerView: 1,
	effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
})

const gallerySlider = document.querySelector('.gallery__slider-container')
var mySwiperGallery = new Swiper(gallerySlider, {
	pagination: {
		el: '.main__swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.main__swiper-button-next',
		prevEl: '.main__swiper-button-prev',
	},
	slideClass: 'gallery__card',
	spaceBetween: 50,
	slidesPerView: 3,
	slidesPerColumn: 2,
	slidesPerGroup: 3,
	paginationClickable: true,
	breakpoints: {
		1650: {
			slidesPerView: 3,
			slidesPerColumn: 2,
			slidesPerGroup: 3,
		},

		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 33,
		},

		320: {
			slidesPerView: 1,
			slidesPerColumn: false,
			slidesPerGroup: 1,
			spaceBetween: 10,
		}
	},
})

var more = document.querySelectorAll('.event__btn');

for (var i = 0; i < more.length; i++) {
	more[i].addEventListener('click', function () {
		var showPerClick = 6;

		var hidden = document.querySelectorAll('div.hidden');
		for (var i = 0; i < showPerClick; i++) {
			if (!hidden[i]) return this.outerHTML = "";
			hidden[i].classList.remove('hidden');
		}
	});
}

function eventOpen() {
	if ($(window).width() > 980) {
		$(".event__card:gt(1)").removeClass("hidden");
	}
	else {
		$(".event__card:gt(1)").addClass("hidden");
	}

	if ($(window).width() < 600) {
		$(".event__card:gt(2)").removeClass("hidden");
		$(".event__card").removeClass("hidden");
		$(".event__btn-container").css("display", "none")
	}
	else {
		$(".event__card:gt(2)").addClass("hidden");
	}
}

eventOpen();

const eventSlider = document.querySelector('.event__slider-container');

let mySwiperEvent;

function mobileSlider() {
	if (window.innerWidth <= 600 && eventSlider.dataset.mobile == 'false') {
		mySwiperEvent = new Swiper(eventSlider, {
			sliderPerView: 1,
			spaceBetween: 10,
			slideClass: 'event__card',
			pagination: {
				el: '.event__swiper-pagination',
				clickable: true,
			},
		});

		eventSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		eventSlider.dataset.mobile = 'false';

		if (eventSlider.classList.contains('.swiper-container-initialized')) {
			mySwiperEvent.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});

const editionSlider = document.querySelector('.edition__slider-container')

function mobileSliderEdition() {
	if ($(window).width() > 720) {
		mySwiperEdition = new Swiper(editionSlider, {
			pagination: {
				el: '.main__swiper-pagination',
				type: 'fraction',
			},
			navigation: {
				nextEl: '.main__swiper-button-next',
				prevEl: '.main__swiper-button-prev',
			},
			slideClass: 'edition__card',
			spaceBetween: 50,
			slidesPerView: 3,
			slidesPerGroup: 3,
			paginationClickable: true,
			breakpoints: {
				1680: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 35,
				}
			},
		});
	} else {
		editionSlider.destroy();
	}
};

mobileSliderEdition();
$(window).resize(mobileSliderEdition);

