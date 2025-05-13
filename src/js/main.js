const navMobile = document.querySelector('.nav-mobile')
const burgerBtn = document.querySelector('.burger-btn')
const burgerBtnIcon = burgerBtn.querySelector('.burger-btn__icon')
const navMobileUl = document.querySelector('.nav-mobile__items')
const navMobileLinks = navMobileUl.querySelectorAll('.nav-mobile__item')
const navMobileBrand = document.querySelector('.nav-mobile__brand a')
const year = document.querySelector('.year')

const handleNav = e => {
	navMobileUl.classList.toggle('show-nav')
	navMobileBrand.classList.toggle('dark-color')
	burgerBtnIcon.classList.toggle('fa-xmark')
}

const navMobileShadow = () => {
	if (window.scrollY > 200) {
		navMobile.classList.add('nav-mobile-shadow')
	} else {
		navMobile.classList.remove('nav-mobile-shadow')
	}
}

const handleYear = () => {
	const currentYear = new Date().getFullYear()
	year.textContent = currentYear
}

burgerBtn.addEventListener('click', e => {
	e.stopPropagation()
	handleNav()
})

navMobileLinks.forEach(navMobileLink => {
	navMobileLink.addEventListener('click', handleNav)
})

document.addEventListener('click', e => {
	if (navMobileUl.classList.contains('show-nav') && !e.target.classList.contains('show-nav')) {
		handleNav()
	}
})

document.addEventListener('scroll', navMobileShadow)
document.addEventListener('DOMContentLoaded', handleYear)
