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
    navLink.style.right = "-200px";
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