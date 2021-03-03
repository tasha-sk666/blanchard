const projectSlider = document.querySelector('.project__slider-container');
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
		768: {
			spaceBetween: 30,
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		}
	},
	observer: true,
	observeParents: true,
});

const heroSlider = document.querySelector('.hero__slider-container');
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
});

const gallerySlider = document.querySelector('.gallery__slider-container');
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
});

const eventSlider = document.querySelector('.cards');

let mySwiperEvent;

function mobileSlider() {
	if (window.innerWidth <= 600 && eventSlider.dataset.mobile == 'false') {
		mySwiperEvent = new Swiper(eventSlider, {
			sliderPerView: 1,
			spaceBetween: 15,
			slideClass: 'card',
			wrapperClass: 'cards__list',
			pagination: {
				el: '.event__pagination',
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

const editionSlider = document.querySelector('.edition__slider-container');

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
				1024: {
					slidesPerView: 2,
					spaceBetween: 45,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 35,
				},
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				}
			},
		});
	} else {
		editionSlider.destroy();
	}
}

mobileSliderEdition();
$(window).resize(mobileSliderEdition);
