//slide show

var i = 0;
var images = [];
var time = 3000;

images[0] = './img/image1.jpg';
images[1] = './img/image2.jpg';
images[2] = './img/image3.jpg';

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    
    setTimeout("changeImg()", time);
}
window.onload = changeImg;

//about me

var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        content = this.nextElementSibling;
        this.classList.toggle('is-open');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}
