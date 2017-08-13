
var myimg = document.querySelector('img');

myimg.onclick = function () {
    var mysrc = myimg.getAttribute('src');
    if (mysrc === "https://vignette2.wikia.nocookie.net/zelda/images/b/bf/Firefox.png/revision/latest?cb=20100123012209") {
        myimg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/A_username_graphic_for_FireFox.png');
    }
    else {
        myimg.setAttribute('src', 'https://vignette2.wikia.nocookie.net/zelda/images/b/bf/Firefox.png/revision/latest?cb=20100123012209');
    }
}