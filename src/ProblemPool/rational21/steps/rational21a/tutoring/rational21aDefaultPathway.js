var hints = [{id: "rational21a-h1", type: "hint", dependencies: [], title: "Common Denominator", text: "The first step is to find the least common denominator of two rational expressions.", variabilization: {}}, {id: "rational21a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(x+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)$$"], dependencies: ["rational21a-h1"], title: "Common Denominator", text: "What is the least common denominator?", variabilization: {}}, {id: "rational21a-h3", type: "hint", dependencies: ["rational21a-h2"], title: "Common Denominator", text: "Since we do not know the value of x or y, the least common multiple of the denominators is their product. So, the LCD is $$\\left(x+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "rational21a-h4", type: "hint", dependencies: ["rational21a-h3"], title: "Multiplying the First Expression", text: "Now we need to multiply both expressions by a factor equal to 1 that makes the denominators equal to the LCD. Starting with the first expression, we can multiply $$\\frac{x}{x+\\left(1\\right)}$$ by a factor to make the denominator $$\\left(x+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)$$.", variabilization: {}}, {id: "rational21a-h5", type: "hint", dependencies: ["rational21a-h4"], title: "Multiplying the First Expression", text: "The denominator of $$\\frac{x}{x+\\left(1\\right)}$$ multiplied by $$y+\\left(1\\right)$$ equals $$\\left(x+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)$$. So, we need to multiply $$\\frac{x}{x+\\left(1\\right)}$$ by $$\\frac{y+\\left(1\\right)}{y+\\left(1\\right)}$$.", variabilization: {}}, {id: "rational21a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{xy+x}{\\left(x+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)}$$"], dependencies: ["rational21a-h5"], title: "Multiplying the First Expression", text: "What is $$\\frac{x}{x+\\left(1\\right)} \\frac{y+\\left(1\\right)}{y+\\left(1\\right)}$$?", variabilization: {}}, {id: "rational21a-h7", type: "hint", dependencies: ["rational21a-h6"], title: "Multiplying the First Expression", text: "We can keep the denominator as it is, but distribute the x into $$y+\\left(1\\right)$$: $$xy+x$$.", variabilization: {}}, {id: "rational21a-h8", type: "hint", dependencies: ["rational21a-h7"], title: "Multiplying the Second Expression", text: "Next, we need to multiply the second expression by a fraction to make the denominator equal to the LCD. Because the denominator of $$\\frac{y}{y+\\left(1\\right)}$$ needs to by multiplied by $$x+\\left(1\\right)$$ to become $$\\left(z+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)$$, we need to $$\\frac{y}{y+\\left(1\\right)}$$ by $$\\frac{y+\\left(1\\right)}{y+\\left(1\\right)}$$.", variabilization: {}}, {id: "rational21a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(xy+y)/((x+1)(y+1)"], dependencies: ["rational21a-h8"], title: "Multiplying the Second Expression", text: "What is $$\\frac{y}{y+\\left(1\\right)} \\frac{x+\\left(1\\right)}{x+\\left(1\\right)}$$?", variabilization: {}}, {id: "rational21a-h10", type: "hint", dependencies: ["rational21a-h9"], title: "Multiplying the Second Expression", text: "Distribute the y into $$x+\\left(1\\right)$$: $$x y=xy$$ and $$y \\left(1\\right)=y$$, so the expression reads $$xy+y$$.", variabilization: {}}, {id: "rational21a-h11", type: "hint", dependencies: ["rational21a-h10"], title: "Subtracting the Expressions", text: "Because the expressions now have the same denominator, we can add the numerators to get the sum of the two expressions. We'll leave the denominator as it is, but combine the numerator's like terms.", variabilization: {}}, {id: "rational21a-h12", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) xy+x+y$$"], dependencies: ["rational21a-h11"], title: "Subtracting the Expressions", text: "What is $$xy+x+xy+y$$?", variabilization: {}}, {id: "rational21a-h13", type: "hint", dependencies: ["rational21a-h12"], title: "Subtracting the Expressions", text: "Combine the like terms: $$xy+xy=2xy;$$ the x and y stay the same.", variabilization: {}}, {id: "rational21a-h14", type: "hint", dependencies: ["rational21a-h13"], title: "Final Expression", text: "Now we have our final expression: $$\\frac{\\left(2\\right) xy+x+y}{\\left(x+\\left(1\\right)\\right) \\left(y+\\left(1\\right)\\right)}$$.", variabilization: {}}, ]; export {hints};