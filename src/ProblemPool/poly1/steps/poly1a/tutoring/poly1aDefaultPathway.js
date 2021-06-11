var hints = [{id: "poly1a-h1", type: "hint", dependencies: [], title: "Combining $$x^3$$ Terms", text: "The first step is to combine the terms containing $$x^3$$.", variabilization: {}}, {id: "poly1a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(4\\right) x^3$$"], dependencies: ["poly1a-h1"], title: "Combining $$x^3$$ Terms", text: "How can we combine the $$x^3$$ coefficients?", variabilization: {}}, {id: "poly1a-h3", type: "hint", dependencies: ["poly1a-h2"], title: "Combining $$x^3$$ Terms", text: "Since our only $$x^3$$ terms is $$\\left(4\\right) x^3$$, this is the most simplified version of $$x^3$$.", variabilization: {}}, {id: "poly1a-h4", type: "hint", dependencies: ["poly1a-h3"], title: "Combining $$x^2$$ Terms", text: "Next, we can combine the terms with $$x^2$$.", variabilization: {}}, {id: "poly1a-h5", type: "hint", dependencies: ["poly1a-h4"], title: "Combining $$x^2$$ Terms", text: "How can we simplify the $$x \\left(2\\right)$$ coefficients?", variabilization: {}}, {id: "poly1a-h6", type: "hint", dependencies: ["poly1a-h5"], title: "Combining $$x^2$$ Terms", text: "Our $$x^2$$ terms are $$\\left(12\\right) x^2$$ and $$\\left(8\\right) x^2$$. We can simplify the $$x^2$$ terms by adding the coefficients.", variabilization: {}}, {id: "poly1a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(20\\right) x^2$$"], dependencies: ["poly1a-h6"], title: "Combining $$x^2$$ Terms", text: "What is $$\\left(12\\right) x^2+\\left(8\\right) x^2$$?", variabilization: {}}, {id: "poly1a-h8", type: "hint", dependencies: ["poly1a-h7"], title: "Combining x Terms", text: "Now we can simplify the x terms.", variabilization: {}}, {id: "poly1a-h9", type: "hint", dependencies: ["poly1a-h8"], title: "Combining x Terms", text: "What is the simplified version of the x terms?", variabilization: {}}, {id: "poly1a-h10", type: "hint", dependencies: ["poly1a-h9"], title: "Combining x Terms", text: "The x terms are 9x and -5x. We can simplify the x terms by adding the coefficients.", variabilization: {}}, {id: "poly1a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4x"], dependencies: ["poly1a-h10"], title: "Combining x Terms", text: "What is 9x-5x?", variabilization: {}}, {id: "poly1a-h12", type: "hint", dependencies: ["poly1a-h11"], title: "Adding the Constants", text: "The last part we need to simplify is the constants. The constants in this expression are -21 and 20. By adding these integers, we will have the simplified term.", variabilization: {}}, {id: "poly1a-h13", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["poly1a-h12"], title: "Adding the Constants", text: "What is $$-\\left(21\\right)+\\left(20\\right)$$?", variabilization: {}}, {id: "poly1a-h14", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(4\\right) x^3+\\left(20\\right) x^2+\\left(4\\right) x-\\left(1\\right)$$"], dependencies: ["poly1a-h13"], title: "Simplified Expression", text: "How do we format the new expression?", variabilization: {}}, {id: "poly1a-h15", type: "hint", dependencies: ["poly1a-h14"], title: "Simplified Expression", text: "Since there are no more terms to simplify, we can write the expression as the sum of the simplified terms: $$\\left(4\\right) x^3+\\left(20\\right) x^2+\\left(4\\right) x-\\left(1\\right)$$.", variabilization: {}}, ]; export {hints};