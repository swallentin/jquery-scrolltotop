'use strict';

(function ($) {

	$(function () {

		/* jQuery Scroll To Top functionality
		 * ======================================================= */

		$.scrollToTop = function (callback) {

			if (isOnTop()) {
				callback();
			}

			$(document).on('scroll.scrollToTop', $.throttle(250, function () {
				if (isOnTop()) {
					$(this).off('scroll.scrollToTop');
					callback();
				}
			}));

			$('body,html').animate({
				scrollTop: 0
			}, 400);

		};

	});

	var isOnTop = function () {
		return $(document).scrollTop() === 0;
	};


}(jQuery));