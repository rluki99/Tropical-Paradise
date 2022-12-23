const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

// EXPANDABLE MENU

const handleNav = () => {
	nav.classList.toggle('nav--active')

	navBtnBars.classList.remove('black-bars-color')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}

// MENU ENTER ANIMATION (ONE AFTER ANOTHER)

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

// YEAR IN SPAN IN FOOTER

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// OBSERVER FUNCTION - ON WHICH SECTION WE ARE CURRENTLY

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {

		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}

	})
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
