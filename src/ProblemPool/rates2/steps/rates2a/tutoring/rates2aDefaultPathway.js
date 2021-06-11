var hints = [{id: "rates2a-h1", type: "hint", dependencies: [], title: "average rate of change", text: "To find the average rate of change, we calculate the change in y, the change in x, and the average rate of change is the ratio (change in y)/(change in x).", variabilization: {}}, {id: "rates2a-h2", type: "hint", dependencies: ["rates2a-h1"], title: "Computing endpoints", text: "We can start by computing the function values at each endpoint of the interval.", variabilization: {}}, {id: "rates2a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{7}{2}$$"], dependencies: ["rates2a-h2"], title: "Computing left endpoint", text: "What is f(2)?", subHints: [{id: "rates2a-h3-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{7}{2}$$"], dependencies: [], title: "Computing left endpoint", text: "To find f(2), we plug in 2 for every x in the equation. What is $${\\left(2\\right)}^2-\\frac{1}{2}$$?", variabilization: {}}], variabilization: {}}, {id: "rates2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{63}{4}$$"], dependencies: ["rates2a-h2"], title: "Computing right endpoint", text: "What is f(4)?", subHints: [{id: "rates2a-h4-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{63}{4}$$"], dependencies: [], title: "Computing right endpoint", text: "To find f(4), we plug in 4 for every x in the equation. What is $${\\left(4\\right)}^2-\\frac{1}{4}$$?", variabilization: {}}], variabilization: {}}, {id: "rates2a-h5", type: "hint", dependencies: ["rates2a-h3", "rates2a-h4"], title: "Average rate of change", text: "The average rate of change $$=\\frac{f \\left(4\\right)-f \\left(2\\right)}{\\left(4\\right)-\\left(2\\right)}$$.", variabilization: {}}, {id: "rates2a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{49}{8}$$"], dependencies: ["rates2a-h5"], title: "Computing average rate of change", text: "What is the average rate of change, plugging in $$f(2)=\\frac{7}{2}$$ and $$f(4)=\\frac{63}{4}$$?", variabilization: {}}, ]; export {hints};