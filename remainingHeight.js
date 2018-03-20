(function () {
	if (ko == undefined) {
		throw "Knockout is not defined.";
	}
	
	if ($ == undefined) {
		throw "JQuery is not defined.";
	}

	var updateHeight = function (element) {
		var siblings = $(element).siblings();
		var numHeightSum = 0;
		$(siblings).each(function (i, sibling) {
			var heightNum = ($(sibling).outerHeight(true));
			numHeightSum += heightNum;
		});

		var elementHeight = $(element).parent().height() - numHeightSum;
		
		$(element).outerHeight("" + Math.round(elementHeight) + "px");
	}

	ko.bindingHandlers.remainingHeight = {
		init: function (element) {
			updateHeight(element);
			
			$(window).resize(updateHeight.bind(this, element));
		}
	}
})();