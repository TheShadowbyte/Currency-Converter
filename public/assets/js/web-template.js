// Use const for variables that are not reassigned
const template = document.querySelector("#currency-calculator-template");

// Use arrow functions for concise function expressions
const generateClone = () => {
	// Use the template element's content property directly for cloning
	const clone = document.importNode(template.content, true);
	return clone;
};

// Use const for these DOM element references
const firstHost = document.querySelector("#currency-calculator-wrap");

firstHost.appendChild(generateClone());