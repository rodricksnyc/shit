$(document).ready(function () {


	$("a, button, input, [tabIndex='0']").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabIndex='0']").on('focusout', function() {
		$(this).css('outline', 'none')
	})



	if ($(document).innerWidth() <= 767) {


		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {


				$('.back-to-top').css({
					'top' : '72%'
				})
			}
			else {


				$('.back-to-top').css({
					'top' : '94%'
				})

			}

		});


	}



	if ($(document).innerWidth() <= 375) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {


				$('.back-to-top').css({
					'top' : '66.5%'
				})
			}
			else {


				$('.back-to-top').css({
					'top' : '94%'
				})

			}

		});

	}


	if ($(document).innerWidth() <= 320) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.flipIt').css({
					'top' : '48%'
				})
				$('.back-to-top').css({
					'top' : '61%'
				})
			}
			else {

				$('.flipIt').css({
					'top' : '84%'
				})
				$('.back-to-top').css({
					'top' : '94%'
				})

			}

		});

	}




	$('.back-to-top').click(() => {
		scrollfn("#overview");
	})



	$(window).scroll(function () {
		((window.pageYOffset || document.documentElement.scrollTop) > 100) ?
		$('.back-to-top, .flipIt').css({ opacity: 1, visibility: "visible" }) :
		$('.back-to-top, .flipIt').css({ opacity: 0, visibility: "hidden" });


	});

	function scrollfn(e) {
		let $target = $(e),
		offSet = e === "#overview" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');
	}

	$('.customStack input, textarea').keydown(function (event) {
		$('.next').css('background', '#611C35')

	});



	  $('.account input').on('keypress', function (e) {


	  	if(!$('#email').val() == '' && !$('#password').val() =='' && !$('#confirmPassword').val() =='' && !$('#firstName').val() =='' &&  !$('#lastName').val() =='' &&  !$('#number').val() =='' )    {

					$('.next').css('background', '#611C35')

	  	}

	  });


	$('.form-check input').change(function () {
		if ($('input').not('#Consent_2').is(':checked')) {

			$('.next').css('background', '#611C35')
		}

		else {
			$('.next').css('background', '#707070')
		}
	})



	$(".form-check").on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$('.form-check').each(function() {
				$(this).addClass('focusClass')
			});

		}

	})





})
