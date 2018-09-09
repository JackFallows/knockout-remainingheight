(function () {
	if (ko == undefined) {
		throw "Knockout is not defined.";
	}
	
	if ($ == undefined) {
		throw "JQuery is not defined.";
	}

	ko.bindingHandlers.remainingHeight = {
		update: function (element, valueAccessor) {
		    const value = valueAccessor();
		    if (ko.isObservable(value)) {
		        value(); // this will apply a subscription to the observable, triggering a recalculation of the element height every time the observable's value changes
            }
            
			$(element).css("height", "calc(100% - " + $(element).siblings(":visible").toArray().reduce(function (px, el) { return px += $(el).outerHeight(true) }, 0) + "px");
		}
	}
})();