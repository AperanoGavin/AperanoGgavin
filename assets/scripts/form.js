//récuperer la class form-connexion-body 
var form = document.querySelector('.form-connexion-body');
var inputs = form.querySelectorAll('input');
var submit = form.querySelector('input[type="submit"]');
var error = document.querySelector('.error');
var errorText = document.querySelector('.error-text');
var errorIcon = document.querySelector('.error-icon');
var email = form.querySelector('input[type="email"]');
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
            $(".errors").css("color", "red");
            $(".errors").css("text-align", "center");

            //diminuer la taille de la div si on est sur un mobile

            if ($(window).width() < 700) {
                $(".errors").css("font-size", "0.8em");
            };


        }
        $(".errors").empty();
        $(".errors").append("<i class='fa fa-exclamation-triangle'></i>");
        $(".errors").append("<span class='error-text'>Veuillez remplir tous les champs</span>");
    } else {
        //suprimer $newDiv
        $(".errors").remove();

    }
});

//si t[type="email"]') on remarque que l'email n'est pas valide  on rend le text mis dans l'input rouge
email.addEventListener('input', function() {
    if (email.validity.typeMismatch) {
        email.style.color = 'red';
    } else {
        email.style.color = 'black';
    }
});