app.controller('layoutsController', function() {
  angular.element(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });
    $('.materialboxed').materialbox();
  });
});
