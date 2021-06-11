var hints = [{id: "VarCon33l-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side.", variabilization: {}}, {id: "VarCon33l-h2", type: "hint", dependencies: ["VarCon33l-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon33l-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(5\\right) z+\\left(6.45\\right)=23.75$$"], dependencies: ["VarCon33l-h2"], title: "Subtraction", text: "Subtract 8z from each side.", variabilization: {}}, {id: "VarCon33l-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$5z=17.3$$"], dependencies: ["VarCon33l-h3"], title: "Subtraction", text: "Subtract 6.45 from each side.", variabilization: {}}, {id: "VarCon33l-h5", type: "hint", dependencies: ["VarCon33l-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon33l-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$z=3.46$$"], dependencies: ["VarCon33l-h5"], title: "Division", text: "Divide 5 from each side.", variabilization: {}}, {id: "VarCon33l-h7", type: "hint", dependencies: ["VarCon33l-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon33l-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33l-h7"], title: "Verification", text: "Check whether $$\\left(13\\right) \\left(3.46\\right)+\\left(6.45\\right)$$ equals $$\\left(8\\right) \\left(2.46\\right)+\\left(23.75\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};