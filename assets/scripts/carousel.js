let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var link = document.createElement("a");
link.classList.add("prev");
link.setAttribute("onclick", "plusSlides(-1)");
link.innerHTML = "❮";
document.querySelector(".carousel-container").appendChild(link);


var linkr = document.createElement("a");
linkr.classList.add("next");
linkr.setAttribute("onclick", "plusSlides(1)");
linkr.innerHTML = "❯";
document.querySelector(".carousel-container").appendChild(linkr);