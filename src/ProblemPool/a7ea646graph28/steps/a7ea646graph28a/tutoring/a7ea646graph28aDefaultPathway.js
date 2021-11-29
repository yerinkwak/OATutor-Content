var hints = [{id: "a7ea646graph28a-h1", type: "hint", dependencies: [], title: "Factoring Expressions", text: "Factor out $$3x^2$$ out of the expression.", variabilization: {}}, {id: "a7ea646graph28a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3x**2(x**2-2x+ 1)"], dependencies: ["a7ea646graph28a-h1"], title: "Simplifying Expressions", text: "What is the simplified expression?", variabilization: {}}, {id: "a7ea646graph28a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$${\\left(x-1\\right)}^2$$"], dependencies: ["a7ea646graph28a-h2"], title: "Factoring Expressions", text: "What is the factorization of $$x^2$$ + 2x + 1?", variabilization: {}}, {id: "a7ea646graph28a-h4", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["1, 0"], dependencies: ["a7ea646graph28a-h3"], title: "Finding Zeroes", text: "What are the values of x that make the expression 0?", variabilization: {}}, {id: "a7ea646graph28a-h5", type: "hint", dependencies: ["a7ea646graph28a-h4"], title: "Definition of Multiplicity", text: "The multiplicity is the power to which each part of the expression is raised", variabilization: {}}, ]; export {hints};