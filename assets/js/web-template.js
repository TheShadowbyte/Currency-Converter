var template = document.querySelector("#currency-calculator-template");

// The clone variable couldn't be re-used, so made a function
// in order to generate the necessary clone for the template
var generateClone = function() {
	var clone = document.importNode(template.content, true);
	return clone;
}

var firstHost = document.querySelector("#currency-calculator-wrap-1");
var secondHost = document.querySelector("#currency-calculator-wrap-2");
var thirdHost = document.querySelector("#currency-calculator-wrap-3");

firstHost.appendChild(generateClone());
secondHost.appendChild(generateClone());
thirdHost.appendChild(generateClone());