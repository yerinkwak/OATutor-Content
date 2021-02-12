var hints = [{id: "VarCon20a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side."}, {id: "VarCon20a-h2", type: "hint", dependencies: ["VarCon20a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon20a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2y+4=12"], dependencies: ["VarCon20a-h2"], title: "Subtraction", text: "Subtract 7y from each side."}, {id: "VarCon20a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2y=8"], dependencies: ["VarCon20a-h3"], title: "Subtraction", text: "Subtract 4 from each side."}, {id: "VarCon20a-h5", type: "hint", dependencies: ["VarCon20a-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon20a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=4"], dependencies: ["VarCon20a-h5"], title: "Division", text: "Divide 2 from each side."}, {id: "VarCon20a-h7", type: "hint", dependencies: ["VarCon20a-h6"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon20a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["VarCon20a-h7"], title: "Verification", text: "Check whether $$\\left(9\\right) \\left(4\\right)+\\left(4\\right)$$ equals $$\\left(7\\right) \\left(4\\right)+\\left(12\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};