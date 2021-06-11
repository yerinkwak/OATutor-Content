var hints = [{id: "SubAdd30a-h1", type: "hint", dependencies: [], title: "Equals", text: "Locate the \"equals\" word(s). Translate to an equals sign $$(=)$$.", variabilization: {}}, {id: "SubAdd30a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x-12"], dependencies: ["SubAdd30a-h1"], title: "Left Side", text: "Translate the words to the left of the \"equals\" word(s) into an algebraic expression.", variabilization: {}}, {id: "SubAdd30a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["51"], dependencies: ["SubAdd30a-h2"], title: "Right Side", text: "Translate the words to the right of the \"equals\" word(s) into an algebraic expression.", variabilization: {}}, {id: "SubAdd30a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x-12=51$$"], dependencies: ["SubAdd30a-h3"], title: "Translation", text: "Translate the sentence to an algebraic equation.", variabilization: {}}, {id: "SubAdd30a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=63$$"], dependencies: ["SubAdd30a-h4"], title: "Solve", text: "Solve the equation.", variabilization: {}}, ]; export {hints};