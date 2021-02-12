var hints = [{id: "transformation14a-h1", type: "hint", dependencies: [], title: "Order of Transformations", text: "The first step is to recognize the order of transformations. First, $$x^2$$ is horizontally stretched by a factor of 3, then, shifted to the right 4 units, and lastly, shifted down 3 units."}, {id: "transformation14a-h2", type: "hint", dependencies: ["transformation14a-h1"], title: "How to Horizontally Compress a Function", text: "The second step is to stretch the graph horizontally by a scale factor of 3. The coefficient needed for a horizontal stretch or compression is the reciprocal of the stretch or compression. So to compress the graph horizontally by a scale factor of 3, we need a coefficient of $$\\frac{1}{3}$$ in our function. Therefore, replace every x in the function with $$\\frac{1}{3} x$$."}, {id: "transformation14a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{1}{9} x^2$$"], dependencies: ["transformation14a-h2"], title: "Horizontal Compression", text: "What is the function after it has been horizontally compressed by a factor of 3?", choices: ["$$\\frac{1}{9} x^2$$", "$$\\frac{1}{3} x^2$$", "$$\\left(9\\right) x^2$$", "$$\\left(3\\right) x^2$$"]}, {id: "transformation14a-h4", type: "hint", dependencies: ["transformation14a-h3"], title: "Shifting Right Four Units", text: "To shift the function right four units, replace x with x-4 in the function."}, {id: "transformation14a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{1}{9} {\\left(x-\\left(4\\right)\\right)}^2$$"], dependencies: ["transformation14a-h4"], title: "Shifting Right Four Units", text: "What is the function after it has been shifted left four units?", choices: ["$$\\frac{1}{9} {\\left(x+\\left(4\\right)\\right)}^2$$", "$$\\frac{1}{9} {\\left(x-\\left(4\\right)\\right)}^2$$"]}, {id: "transformation14a-h6", type: "hint", dependencies: ["transformation14a-h5"], title: "Shifting Down Three Units", text: "To shift the function down three units, subtract 3 from the function."}, {id: "transformation14a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{1}{9} {\\left(x-\\left(4\\right)\\right)}^2-\\left(3\\right)$$"], dependencies: ["transformation14a-h6"], title: "Shifting Down Three Units", text: "What is the function after it has been shifted down 3 units?", choices: ["$$\\frac{1}{9} {\\left(x-\\left(4\\right)\\right)}^2-\\left(3\\right)$$", "$$\\frac{1}{9} {\\left(x-\\left(4\\right)\\right)}^2+\\left(3\\right)$$"]}, ]; export {hints};