var navLink = document.getElementById("navLink");
var menu = document.getElementById("humberger");
var navUser = document.getElementById("navUser");
var user = document.getElementById("user");

function showMenu() {
    navLink.style.right = "0";
    //rendre le humburger menu invisible
    menu.style.display = "none";
}

function hideMenu() {
    navLink.style.right = "-400px";
    //rendre le humburger menu visible
    menu.style.display = "block";
    //location.reload();
}

function ShowCon() {
    navUser.style.top = "0";
    //rendre le user menu invisible
    user.style.display = "none";


}

function hideCon() {
    navUser.style.top = "-300px";
    //rendre le user menu visible
    user.style.display = "block";
    //location.reload();

}

var navbar = document.getElementsByClassName("navbar")[0];
var userI = document.createElement("i");
userI.classList.add("fa-solid");
userI.classList.add("fa-user");
userI.id = "user";
userI.setAttribute("onclick", "ShowCon()");
navbar.appendChild(userI);

var menuI = document.createElement("i");
menuI.classList.add("fa-solid");
menuI.classList.add("fa-bars");
menuI.id = "humberger";
menuI.setAttribute("onclick", "showMenu()");
navbar.appendChild(menuI);


var navUser = document.getElementsByClassName("nav-user")[0];
navUser.id = "navUser";

var fasI = document.createElement("i");
fasI.classList.add("fas");
fasI.classList.add("fa-times");
fasI.id = "close";
fasI.setAttribute("onclick", "hideCon()");
navUser.insertBefore(fasI, navUser.firstChild);