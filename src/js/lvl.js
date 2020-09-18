$(document).ready(function () {
	const maxRotate = 180;
	const maxScore = 10000;
	const duration1 = 500;

	let score = 0;
	let percentOne = maxRotate / maxScore;
	let maxDeg;
	let arrow = $('.lvl__shape__arrow');
	let check = $('.skills__checkbox');
	let vlll = 0;

	let n = $('.lvl__count');

	function check1() {
		check.each(function () {
			if ($(this)[0].checked) {
				score += 833.3333333333;
			}

			return score;
		});

		n.attr('dataval', n[0].textContent);
		vlll =
			parseInt(n[0].textContent) > parseInt(n.attr('dataval'))
				? n[0].textContent
				: n.attr('dataval');

		return score, 
		vlll;
	}

	function anim() {
		$('.lvl__count').each(function () {
			$(arrow).css('transform', 'rotate(' + maxDeg + 'deg)');

			$(this)
				.prop('Counter', vlll)
				.animate(
					{
						Counter: score,
					},
					{
						duration: duration1,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						},
					},

				);
		});
	}

	check1();
	maxDeg = percentOne * score;
	anim();
	$(check).each(function () {
		$(this).click(function () {
			setTimeout(() => {
				score = 0;
				check1();
				maxDeg = percentOne * score;
				anim();
			}, 0);
		});
	});
});
