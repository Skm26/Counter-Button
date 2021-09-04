const counter = document.querySelector('#counter')
const button = document.querySelectorAll('.button')
let count = 0
button.forEach((button) => {
	button.addEventListener('click', (e) => {
		const styles = e.currentTarget.classList
		if (styles.contains('increase')) {
			count++
		} else if (styles.contains('decrease')) {
			count--
		} 
		counter.textContent = count
	})
})