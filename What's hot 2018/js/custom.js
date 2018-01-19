jQuery(document).ready(function($) {

// --- For Hexagon Select Add Class
//==================================================

    $('.right-side-hexagon .hexagon').on('click', function () {
        $(this).toggleClass('select');
    });


// --- For Blue Hexagon Hover
//==================================================

    $(".left-side-hexagon .blue-hexagon").hover(function(){
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .green-hexagon").addClass("grey-hexagon");  //Add the active class to the area is hovered
    }, function () {
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .green-hexagon").removeClass("grey-hexagon");
    });


// --- For Red Hexagon Hover
//==================================================

    $(".left-side-hexagon .red-hexagon").hover(function(){
        $(".right-side-hexagon .blue-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .green-hexagon").addClass("grey-hexagon");  //Add the active class to the area is hovered
    }, function () {
        $(".right-side-hexagon .blue-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .green-hexagon").removeClass("grey-hexagon");
    });


// --- For Dark Orange Hexagon Hover
//==================================================

    $(".left-side-hexagon .dark-orange-hexagon").hover(function(){
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .blue-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .green-hexagon").addClass("grey-hexagon");  //Add the active class to the area is hovered
    }, function () {
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .blue-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .green-hexagon").removeClass("grey-hexagon");
    });


// --- For Orange Hexagon Hover
//==================================================

    $(".left-side-hexagon .orange-hexagon").hover(function(){
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .blue-hexagon, .right-side-hexagon .green-hexagon").addClass("grey-hexagon");  //Add the active class to the area is hovered
    }, function () {
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .blue-hexagon, .right-side-hexagon .green-hexagon").removeClass("grey-hexagon");
    });


// --- For Green Hexagon Hover
//==================================================

    $(".left-side-hexagon .green-hexagon").hover(function(){
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .blue-hexagon").addClass("grey-hexagon");  //Add the active class to the area is hovered
    }, function () {
        $(".right-side-hexagon .red-hexagon, .right-side-hexagon .dark-orange-hexagon, .right-side-hexagon .orange-hexagon, .right-side-hexagon .blue-hexagon").removeClass("grey-hexagon");
    });




// --- For Bootstrap Tooltip
//==================================================

	$('[data-toggle="tooltip"]').tooltip({
		html:true,
	}); 



// --- For On click page scroll
//==================================================

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
});



});





// --- For Bootstrap Form Validation
//==================================================

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();



// --- For Bootstrap Tooltip Diffrent Color
//==================================================


(function($) {
  if (typeof $.fn.tooltip.Constructor === "undefined") {
    throw new Error("Bootstrap Tooltip must be included first!");
  }

  var Tooltip = $.fn.tooltip.Constructor;

  // add customClass option to Bootstrap Tooltip
  $.extend(Tooltip.Default, {
    customClass: ""
  });

  var _show = Tooltip.prototype.show;

  Tooltip.prototype.show = function() {
    // invoke parent method
    _show.apply(this, Array.prototype.slice.apply(arguments));

    if (this.config.customClass) {
      var tip = this.getTipElement();
      $(tip).addClass(this.config.customClass);
    }
  };
})(window.jQuery);

/** **/
$(document).ready(function() {
  $(".btn-secondary").tooltip();
  $(".btn-custom").tooltip({
    customClass: "tooltip-custom"
  });
  $(".btn-custom-alt").tooltip({
    customClass: "tooltip-custom-alt"
  });
});




