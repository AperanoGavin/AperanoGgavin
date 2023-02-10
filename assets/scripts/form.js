//récuperer la class form-connexion-body et 
var form = document.querySelector('.form-connexion-body');
var inputs = form.querySelectorAll('input');
var submit = form.querySelector('input[type="submit"]');
var error = document.querySelector('.error');
var errorText = document.querySelector('.error-text');
var errorIcon = document.querySelector('.error-icon');

//quand on click sur submit on vérifie si les inputs sont remplis sinon on affiche un message d'erreur
submit.addEventListener('click', function(e) {
    e.preventDefault();
    var empty = false;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            empty = true;
        }
    }
    if (empty) {
        if ($(".errors").length === 0) {
            var $newDiv = $("<div></div>");
            $newDiv.addClass("errors");
            $(".form-connexion-body").append($newDiv);
            //je veux que le message apparaisse au dessus du formulaire et qu'il soit rouge
            $(".errors").css("color", "red");
            $(".errors").css("margin-bottom", "200px");
        }
        $(".errors").empty();
        $(".errors").append("<i class='fa-regular fa-triangle-exclamation'></i>");
        $(".errors").append("<span class='error-text'>Veuillez remplir tous les champs</span>");
    } else {
        //suprimer $newDiv
        $(".errors").remove();

    }
});