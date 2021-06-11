var hints = [{id: "DivMul11a-h1", type: "hint", dependencies: [], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "DivMul11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\frac{2}{5} n}{\\frac{2}{5}}=\\frac{14}{\\frac{2}{5}}$$"], dependencies: ["DivMul11a-h1"], title: "Division", text: "Divide $$\\frac{2}{5}$$ from each side.", variabilization: {}}, {id: "DivMul11a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["35"], dependencies: ["DivMul11a-h2"], title: "Simplification", text: "What do we get for n after simplifying the equation?", variabilization: {}}, {id: "DivMul11a-h4", type: "hint", dependencies: ["DivMul11a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "DivMul11a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["DivMul11a-h4"], title: "Verification", text: "Check whether $$\\frac{2}{5} \\left(35\\right)$$ equals 14.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};