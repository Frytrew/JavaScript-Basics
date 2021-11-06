var button = document.querySelector('.button2')
var h1 = document.querySelector('.text')

button.addEventListener('click', handleLinkClick)

function handleLinkClick (event) {
if (h1.style.display === 'none') {
h1.style.display = 'flex'
h1.innerHTML = 'Текст, который выводится'
} else {
    var div = document.createElement('div');
    div.className = "text";
    div.innerHTML = "Текст, который выводится";
    h1.after(div);
}}

// [хуй]