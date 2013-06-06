$(document).on("click", ".menu-trigger", function () {

	// If menu isn't visible.
	if (!$(".menu-inner").is(":visible")) {
	
		// Slide it down.
		$(".menu-inner").slideDown('fast');
	}
	else {
	
		// Otherwise slide it back up.
		$(".menu-inner").slideUp('fast');
	}
});