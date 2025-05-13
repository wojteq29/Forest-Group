const sections = document.querySelectorAll('.section')
const navDesktopLinks = document.querySelectorAll('.nav-desktop__item')

const scrollspy = () => {
	sections.forEach(section => {
		let top = window.scrollY
		let offset = section.offsetTop - 150
		let height = section.offsetHeight
		let id = section.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navDesktopLinks.forEach(link => {
				link.classList.remove('active')
			})

			document.querySelector(`.nav-desktop__items a[href*="#${id}"]`).classList.add('active')
		}
	})
}

document.addEventListener('scroll', scrollspy)
