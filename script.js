messenger = document.getElementById('chat');
msg = document.getElementById('msg');
submit = document.getElementById('sub');
myForm = document.getElementById('messenger')

socket = new WebSocket("ws://localhost:8000/chat/oussama")

socket.onopen = function(event) {
	console.log('WebSocket is open now.')
}

socket.onmessage = function(event) {
	const data = JSON.parse(event.data);
	tmp = messenger.innerHTML.replace('animateF', '').replace('animate', '');
	messenger.innerHTML = tmp + `<p class="message friend animateF">${data.content}</p>`
	messenger.scrollTop = messenger.scrollHeight
	console.log('Message from server:', data.content);
};

socket.onclose = function(event) {
	console.log('WebSocket is closed now.');
};

myForm.addEventListener('submit', (e) => {
	e.preventDefault()
	if (msg.value) {
		tmp = messenger.innerHTML.replace('animate', '');
		messenger.innerHTML = tmp + `<p class="message myMsg animate">${msg.value}</p>`
		socket.send(JSON.stringify({ 'message': `${msg.value}` }));
		msg.value = '';
		messenger.scrollTop = messenger.scrollHeight
		// setTimeout(() => {
		// 	tmp = messenger.innerHTML.replace('animateF', '').replace('animate', '');
		// 	messenger.innerHTML = tmp + `<p class="message friend animateF">Hello</p>`
		// 	messenger.scrollTop = messenger.scrollHeight
		// }, 1000);
	}
	// messenger.innerHTML = messenger.innerHTML.replace('animateF', '').replace('animate', '')
})