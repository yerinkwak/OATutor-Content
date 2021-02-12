var hints = [{id: "Formula14a-h1", type: "hint", dependencies: [], title: "Identify the Unknown", text: "The formula is $$\\left(3\\right) x+\\left(4\\right) y=10$$, and we want to find y."}, {id: "Formula14a-h2", type: "hint", dependencies: ["Formula14a-h1"], title: "Substitute", text: "Since we know that $$x=\\frac{14}{3}$$, we can substitute $$\\frac{14}{3}$$ for x into the equation and get $$\\left(3\\right) \\frac{14}{3}+\\left(4\\right) y=10$$."}, {id: "Formula14a-h3", type: "hint", dependencies: ["Formula14a-h2"], title: "Simplify", text: "Simplifying the equation, we get $$\\left(14\\right)+\\left(4\\right) y=10$$."}, {id: "Formula14a-h4", type: "hint", dependencies: ["Formula14a-h3"], title: "Solve", text: "To solve the equation, we can start by subtracting 14 from both sides, which gives us the equation $$\\left(4\\right) y=-\\left(4\\right)$$."}, {id: "Formula14a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1"], dependencies: ["Formula14a-h4"], title: "Isolate", text: "Now, we can divide both sides by 4 to isolate y. What is y?"}, ]; export {hints};