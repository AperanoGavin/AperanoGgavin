const liens = document.querySelectorAll(".side_bar a");
liens.forEach(lien => {
    lien.addEventListener("click", () => {
        const idSection = lien.getAttribute("id");
        const Allsections = document.querySelectorAll(".content section");
        console.log(Allsections);
        Allsections.forEach(section => {
            if (section.id === idSection) {
                //faire remonter le scroll au début de la section
                section.scrollIntoView();

            } else {

            }
        });


    });
});