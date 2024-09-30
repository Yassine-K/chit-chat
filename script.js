messenger = document.getElementById('chat');
msg = document.getElementById('msg');
submit = document.getElementById('sub');
myForm = document.getElementById('messenger')

myForm.addEventListener('submit', (e) => {
	e.preventDefault()
	if (msg.value) {
		tmp = messenger.innerHTML.replace('animate', '');
		messenger.innerHTML = tmp + `<p class="message myMsg animate">${msg.value}</p>`
		msg.value = '';
		setTimeout(() => {
			tmp = messenger.innerHTML.replace('animateF', '').replace('animate', '');
			messenger.innerHTML = tmp + `<p class="message friend animateF">Hello</p>`
		}, 1000);
	}
	// messenger.innerHTML = messenger.innerHTML.replace('animateF', '').replace('animate', '')
})