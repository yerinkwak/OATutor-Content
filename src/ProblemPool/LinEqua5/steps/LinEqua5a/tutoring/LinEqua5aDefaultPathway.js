var hints = [{id: "LinEqua5a-h1", type: "hint", dependencies: [], title: "Isolation", text: "First we should isolate the variable on one side of the equation by adding, subtracting, multiplying or dividing the equation.", variabilization: {}}, {id: "LinEqua5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$4x=8$$"], dependencies: ["LinEqua5a-h1"], title: "Addition", text: "What is the result after adding 3 from both sides?", variabilization: {}}, {id: "LinEqua5a-h3", type: "hint", dependencies: ["LinEqua5a-h2"], title: "Normalization", text: "When the variable is multiplied by a coefficient in the final stage, multiply both sides fo the equation by the reciprocal of the cofficient.", variabilization: {}}, {id: "LinEqua5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=2$$"], dependencies: ["LinEqua5a-h3"], title: "Multiplication", text: "What is the result after multiplying both sides by $$\\frac{1}{4}$$?", variabilization: {}}, ]; export {hints};