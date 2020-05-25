
$(document).ready(function() {

    $("#menu li a").click(function () {

        $("#menu li").removeClass("active");
        $(this).parent().addClass("active");
        let page = $(this).attr('href'); // Page cible
        let speed = 600; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top}, speed);

    });
});

