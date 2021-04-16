
$(document).ready(function() {

    $("#menu li a").click(function () {

        $("#menu li").removeClass("active");
        $(this).parent().addClass("active");
        let page = $(this).attr('href'); // Page cible
        let speed = 600; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top}, speed);

    });
    $(".filter-b").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        { 
            $('.filter').show('1000');
        }
        else
        { 
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    
    if ($(".filter-b").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");
    
});
