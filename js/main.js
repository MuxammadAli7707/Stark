let searchbtn = document.getElementById('search');
let removebtn = document.getElementById('remove');
let modalboxbtn = document.getElementById('modalBox');

searchbtn.addEventListener('click', function() {
  modalBox.classList.add('show');
});

removebtn.addEventListener('click', function() {
  modalBox.classList.remove('show');
});

let user = document.getElementById('user');
let closebtn = document.getElementById('close');
let login = document.getElementById('login');

user.addEventListener('click', function() {
  login.classList.add('shows');
});

closebtn.addEventListener('click', function() {
  login.classList.remove('shows');
});


let message = document.getElementById('open-message');
let close = document.getElementById('message-remove');
let opneing = document.getElementById('modalMessenger');

message.addEventListener('click', function() {
  modalMessenger.classList.add('open');
});

close.addEventListener('click', function() {
  modalMessenger.remove('open');
});