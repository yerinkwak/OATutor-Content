var hints = [{id: "Visualize1a-h1", type: "hint", dependencies: [], title: "Defining Simplified Fraction", text: "A fraction is considered simplified if there are no common factors in its numerator and denominator.", variabilization: {}}, {id: "Visualize1a-h2", type: "hint", dependencies: ["Visualize1a-h1"], title: "Finding Common Factors", text: "If we find the common factor of the numerator and the denominator, we can easily use the equivalent fractions property to simplify the fraction.", variabilization: {}}, {id: "Visualize1a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["Visualize1a-h2"], title: "Finding Common Factors", text: "What is the largerst common factor between 32 and 56?", subHints: [{id: "Visualize1a-h3-s1", type: "hint", dependencies: [], title: "Finding Common Factors", text: "We can rewrite 32 as $$\\left(4\\right) \\left(8\\right)$$ and 56 as $$\\left(7\\right) \\left(8\\right)$$, which tells us that the largest common factor is 8.", variabilization: {}}], variabilization: {}}, {id: "Visualize1a-h4", type: "hint", dependencies: ["Visualize1a-h3"], title: "Equivalent Fractions Property", text: "We can then use the equivalent fractions property to simpily the fraction, which states that if a, b, c are numbers where b≠0, c≠0, then $$\\frac{a}{b}=\\frac{a c}{b c}$$.", variabilization: {}}, {id: "Visualize1a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(4\\right)}{7}$$"], dependencies: ["Visualize1a-h4"], title: "Final Answer", text: "In the previous steps, we rewrite $$\\frac{-\\left(32\\right)}{56}$$ as $$\\frac{-\\left(\\left(4\\right) \\left(8\\right)\\right)}{\\left(7\\right) \\left(8\\right)}$$. Observe this fraction. What can we simplify it to?", variabilization: {}}, ]; export {hints};