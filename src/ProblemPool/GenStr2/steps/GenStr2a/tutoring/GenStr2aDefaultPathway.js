var hints = [{id: "GenStr2a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr2a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(5\\right) x+\\left(15\\right)=35$$"], dependencies: ["GenStr2a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr2a-h3", type: "hint", dependencies: ["GenStr2a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation.", variabilization: {}}, {id: "GenStr2a-h4", type: "hint", dependencies: ["GenStr2a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation.", variabilization: {}}, {id: "GenStr2a-h5", type: "hint", dependencies: ["GenStr2a-h4"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr2a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$5x=20$$"], dependencies: ["GenStr2a-h5"], title: "Subtraction", text: "Subtract 15 from each side.", variabilization: {}}, {id: "GenStr2a-h7", type: "hint", dependencies: ["GenStr2a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr2a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=4$$"], dependencies: ["GenStr2a-h7"], title: "Division", text: "Divide 5 from each side.", variabilization: {}}, {id: "GenStr2a-h9", type: "hint", dependencies: ["GenStr2a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr2a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr2a-h9"], title: "Verification", text: "Check whether $$\\left(5\\right) \\left(\\left(4\\right)+\\left(3\\right)\\right)$$ equals 35.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};