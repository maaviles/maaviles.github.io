$(document).ready(function(){

  // Smooth scroll
  
  $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');

      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
       
      }
    }
  });

// Slide toggles

  $("pre").hide();

  $(".sourceButton").click(function(){
    var $this = $(this);
    $this.find("pre").slideToggle();
  });


});

});
