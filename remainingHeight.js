var updateHeight = function(element) {
	var siblings = $(element).siblings();
	var numHeightSum = 0;
	siblings.forEach(function(sibling) {
		var heightNum = ($(sibling).outerHeight(true));
		numHeightSum += heightNum;
	});

	var elementHeight = $(element).parent().height() - numHeightSum;
	
	$(element).outerHeight("" + Math.round(elementHeight) + "px");
}

ko.bindingHandlers.remainingHeight = {
	init: function(element) {
		updateHeight(element);
		
		$(window).resize(updateHeight.bind(this, element));
	}
}