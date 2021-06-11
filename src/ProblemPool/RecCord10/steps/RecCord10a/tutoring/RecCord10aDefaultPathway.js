var hints = [{id: "RecCord10a-h1", type: "hint", dependencies: [], title: "Distance Formula", text: "Given endpoints $$(x_1,y_1)$$, and $$(x_2,y_2)$$, the distance between two points is given by $$\\sqrt{{\\left(x_2-x_1\\right)}^2+{\\left(y_2-y_1\\right)}^2}$$.", variabilization: {}}, {id: "RecCord10a-h2", type: "hint", dependencies: ["RecCord10a-h1"], title: "Plug into the formula", text: "We should first calculate 11-1 and 9-4", variabilization: {}}, {id: "RecCord10a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["RecCord10a-h2"], title: "Subtraction", text: "What is 11-1?", variabilization: {}}, {id: "RecCord10a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5"], dependencies: ["RecCord10a-h2"], title: "Subtraction", text: "What is 9-4?", variabilization: {}}, {id: "RecCord10a-h5", type: "hint", dependencies: ["RecCord10a-h3", "RecCord10a-h4"], title: "Simplification", text: "We need to simplify the expression $${\\left(10\\right)}^2+{\\left(5\\right)}^2$$.", variabilization: {}}, {id: "RecCord10a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["100"], dependencies: ["RecCord10a-h5"], title: "Square", text: "What is $${\\left(10\\right)}^2$$?", variabilization: {}}, {id: "RecCord10a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["25"], dependencies: ["RecCord10a-h5"], title: "Square", text: "What is $${\\left(5\\right)}^2$$?", variabilization: {}}, {id: "RecCord10a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["125"], dependencies: ["RecCord10a-h6", "RecCord10a-h7"], title: "Addition", text: "What is $$\\left(100\\right)+\\left(25\\right)$$?", variabilization: {}}, {id: "RecCord10a-h9", type: "hint", dependencies: ["RecCord10a-h8"], title: "Extraction of square root", text: "The thid step is computing the principal square root.", variabilization: {}}, {id: "RecCord10a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(5\\right) \\sqrt{5}$$"], dependencies: ["RecCord10a-h9"], title: "Square root", text: "What is the principal square root of 125?", variabilization: {}}, ]; export {hints};