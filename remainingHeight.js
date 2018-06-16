(function () {
	if (ko == undefined) {
		throw "Knockout is not defined.";
	}
	
	if ($ == undefined) {
		throw "JQuery is not defined.";
	}

	ko.bindingHandlers.remainingHeight = {
		init: function (element) {
			$(element).css("height", "calc(100% - " + $(element).siblings(":visible").toArray().reduce(function (px, el) { return px += $(el).outerHeight(true) }, 0) + "px");
		}
	}
})();