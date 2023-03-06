let content1 = document.getElementById("menu1");
let content2 = document.getElementById("menu2");
let content3 = document.getElementById("menu3");
let content4 = document.getElementById("menu4");
let content5 = document.getElementById("menu5");
let content6 = document.getElementById("menu6");
let content7 = document.getElementById("menu7");
let content8 = document.getElementById("menu8");
let content9 = document.getElementById("menu9");
let content10 = document.getElementById("menu10");




function displayContent(id) {
    //scroll to content+id
    let content = document.getElementById("menu" + id);
    content.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    

}


