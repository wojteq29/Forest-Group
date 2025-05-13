const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const privacyPolicy = document.querySelector('#privacy-policy')
const error = document.querySelector('.contact-form__error')
const sendBtn = document.querySelector('.contact-form__send-btn')
const popup = document.querySelector('.popup-msg-sent ')

const inputs = [firstName, lastName, email, message]

const checkForm = inputs => {
	inputs.forEach(input => {
		if (!input.value.trim()) {
			showError(input, `Musisz podać ${input.previousElementSibling.textContent.toLowerCase()}`)
		} else {
			clearError(input)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.trim().length < min) {
		showError(input, `${input.previousElementSibling.textContent} składa się z min. ${min} znaków.`)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(email.value.trim())) {
		clearError(email)
	} else {
		showError(email, 'Niepoprawny adres e-mail')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact-form__input-box')
	let isError = false

	allInputs.forEach(input => {
		if (input.classList.contains('error')) {
			isError = true
		}
	})

	if (!isError) {
		popup.classList.add('show-popup')
		const timerId = setTimeout(() => popup.classList.remove('show-popup'), 3000)
		popup.querySelector('.popup-msg-sent__btn').addEventListener('click', () => {
			popup.classList.remove('show-popup')
			clearTimeout(timerId)
		})
	}
}

const acceptPrivacyPolicy = e => {
	sendBtn.disabled = !privacyPolicy.checked
	sendBtn.classList.toggle('btn-disabled', !privacyPolicy.checked);
}

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.contact-form__error')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm(inputs)
	checkLength(firstName, 2)
	checkLength(lastName, 2)
	checkMail(email)
	checkErrors()
})

privacyPolicy.addEventListener('change', acceptPrivacyPolicy)
document.addEventListener('DOMContentLoaded', acceptPrivacyPolicy)
