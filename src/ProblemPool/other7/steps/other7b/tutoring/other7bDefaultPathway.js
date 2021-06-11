var hints = [{id: "other7b-h1", type: "hint", dependencies: [], title: "Subtract", text: "Subtract $$\\left(3\\right) x^2$$ from both sides, so we get $$\\left(12\\right) x \\left(4\\right)-\\left(3\\right) x^2=0$$.", variabilization: {}}, {id: "other7b-h2", type: "hint", dependencies: ["other7b-h1"], title: "GCF", text: "Factor out the GCF $$\\left(3\\right) x^2$$, and we get $$\\left(3\\right) x^2 \\left(\\left(4\\right) x^2-\\left(1\\right)\\right)=0$$", variabilization: {}}, {id: "other7b-h3", type: "hint", dependencies: ["other7b-h2"], title: "Zero Product Property", text: "This states that either $$\\left(3\\right) x^2=0$$ or $$\\left(4\\right) x^2-\\left(1\\right)=0$$", variabilization: {}}, {id: "other7b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["other7b-h3"], title: "First Solution", text: "Set $$\\left(3\\right) x^2=0$$ and simplify. What is x?", variabilization: {}}, {id: "other7b-h5", type: "hint", dependencies: ["other7b-h4"], title: "Next Solution", text: "Set $$\\left(4\\right) x^2-\\left(1\\right)=0$$", variabilization: {}}, {id: "other7b-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(\\left(2\\right) x+\\left(1\\right)\\right) \\left(\\left(2\\right) x-\\left(1\\right)\\right)$$"], dependencies: ["other7b-h5"], title: "Factor", text: "Factor $$\\left(4\\right) x^2-\\left(1\\right)$$ as difference of squares. What expression do we get?", variabilization: {}}, {id: "other7b-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{1}{2}-\\frac{1}{2}$$"], dependencies: ["other7b-h6"], title: "Solutions", text: "What two values make the expression equal 0?", choices: ["$$\\frac{1}{2}-\\frac{1}{2}$$", "2,-2"], variabilization: {}}, ]; export {hints};