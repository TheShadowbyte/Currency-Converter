// Use const for variables that are not reassigned
const template = document.querySelector("#currency-calculator-template");

// Use arrow functions for concise function expressions
const generateClone = () => {
	// Use the template element's content property directly for cloning
	const clone = document.importNode(template.content, true);
	return clone;
};

// Use const for these DOM element references
const firstHost = document.querySelector("#currency-calculator-wrap-1");
const secondHost = document.querySelector("#currency-calculator-wrap-2");
const thirdHost = document.querySelector("#currency-calculator-wrap-3");

// Append the clones to their respective hosts
firstHost.appendChild(generateClone());
// secondHost.appendChild(generateClone());
// thirdHost.appendChild(generateClone());
