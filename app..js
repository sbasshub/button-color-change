const btn = document.getElementById('db-click');

function hexColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

btn.addEventListener('dblclick' ,() => {
        btn.style.background = `#${hexColor()}`;
});