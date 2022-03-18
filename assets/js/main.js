
$(document).ready(function() {
          
        $(".triger-btn").on('click', function(){
            $(".trigermenu, .menu-overlay").toggleClass("active")
        });

        $(".menu-close, .menu-overlay").on('click', function(){
            $(".trigermenu, .menu-overlay").removeClass("active")
        });     

         $('.pagination li').click( function() {
		    $(this).addClass('active').siblings().removeClass('active');
		  });     

});
