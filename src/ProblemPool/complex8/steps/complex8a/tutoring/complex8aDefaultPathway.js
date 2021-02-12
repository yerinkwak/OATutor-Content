var hints = [{id: "complex8a-h1", type: "hint", dependencies: [], title: "Rewriting the Expression Using the Distributive Property: Part 1", text: "Using the Distributive property, an expression with the form $$\\left(a+b\\right) \\left(c+d\\right)$$ can be rewritten as $$a \\left(c+d\\right)+b \\left(c+d\\right)$$."}, {id: "complex8a-h2", type: "hint", dependencies: ["complex8a-h1"], title: "Rewriting the Expression Using the Distributive Property: Part 2", text: "Again using the Distributive Property, $$a \\left(c+d\\right)+b \\left(c+d\\right)$$ can be simplified into $$a c+a d+b c+b d$$."}, {id: "complex8a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(6\\right)+\\left(9\\right) i-\\left(8\\right) i-\\left(12\\right) i^2$$"], dependencies: ["complex8a-h2"], title: "Rewritten Version of the Expression", text: "What does the expression look like after it has been rewritten using the Distributive Property?", choices: ["$$\\left(6\\right)+\\left(9\\right) i-\\left(8\\right) i-\\left(12\\right) i^2$$", "$$\\left(6\\right)+\\left(9\\right) i-\\left(8\\right) i-\\left(12\\right) i \\left(2\\right)$$", "$$\\left(2\\right)+\\left(9\\right) i-\\left(8\\right) i-\\left(12\\right) i \\left(2\\right)$$", "$$\\left(4\\right)-\\left(20\\right) i+\\left(3\\right) i-\\left(10\\right) i^2$$"]}, {id: "complex8a-h4", type: "hint", dependencies: ["complex8a-h3"], title: "Value of $$i^2$$", text: "$$i^2$$ is the square of the square root of -1, so $$i^2=-\\left(1\\right)$$."}, {id: "complex8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12"], dependencies: ["complex8a-h4"], title: "Value of $$-\\left(12\\right) i^2$$", text: "What is the value of $$-\\left(12\\right) i^2$$?"}, {id: "complex8a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["18"], dependencies: ["complex8a-h3", "complex8a-h5"], title: "Sum of Real Numbers", text: "What is the sum of the real numbers of the expression?", subHints: [{id: "complex8a-h6-s1", type: "hint", dependencies: [], title: "Real Numbers in the Expression", text: "6 and 12 are real numbers."}]}, {id: "complex8a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["i"], dependencies: ["complex8a-h3"], title: "Sum of Imaginary Numbers", text: "What is the sum of the imaginary numbers of the expression?", choices: ["-17i", "17i", "i", "-2i"], subHints: [{id: "complex8a-h7-s1", type: "hint", dependencies: [], title: "Imaginary Numbers in the Expression", text: "9i and -8i are imaginary numbers."}]}, {id: "complex8a-h8", type: "hint", dependencies: ["complex8a-h6", "complex8a-h7"], title: "Final Step", text: "The final step is add the sums of the real and imaginary numbers together for the answer."}, ]; export {hints};