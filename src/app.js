const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navlist')

function toggleButton() {
	navlist.classList.toggle('show')
}
hamburgerButton.addEventListener('click', toggleButton)