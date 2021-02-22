let burgerBtn = document.querySelector('.header__burger');
let headerLogo = document.querySelector('.header__logo');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('body');

burgerBtn.addEventListener('click',function() {
	burgerBtn.classList.toggle('active');
	headerLogo.classList.toggle('active');
	headerNav.classList.toggle('active');
	body.classList.toggle('lock');
})

new Swiper('.main-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
});