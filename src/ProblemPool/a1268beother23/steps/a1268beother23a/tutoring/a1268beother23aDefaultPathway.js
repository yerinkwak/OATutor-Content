var hints = [{id: "a1268beother23a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["yes"], dependencies: [], title: "Evaluating Criteria For Subsitution", text: "Is the exponent of the leading term, $$x^4$$, double the exponent of the second term, $$x^2$$?", choices: ["yes", "no"], variabilization: {}}, {id: "a1268beother23a-h2", type: "hint", dependencies: ["a1268beother23a-h1"], title: "Using Subsitution", text: "Since the equation fits the criteria for subsitution, let $$u=x^2$$. What is the expression on the left side in terms of u?", variabilization: {}}, {id: "a1268beother23a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$u=9, -1$$"], dependencies: ["a1268beother23a-h2"], title: "$$u^2-8u-9=0$$, $$u=$$?", text: "", choices: ["$$u=9, -1$$", "$$u=-9, 1$$", "$$u=9, 1$$", "$$u=-9, -1$$"], variabilization: {}}, {id: "a1268beother23a-h4", type: "hint", dependencies: ["a1268beother23a-h3"], title: "Subsituting Back In", text: "The next step if to subsitute u back into $$x^2$$, and then solve for x.", variabilization: {}}, {id: "a1268beother23a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$x=3\\operatorname{pm}\\left(a\\right)$$"], dependencies: ["a1268beother23a-h4"], title: "Solving For x", text: "$$u=9$$, $$x=$$?", choices: ["$$x=3\\operatorname{pm}\\left(a\\right)$$", "$$x=3$$", "$$x=-3$$", "$$x=9$$"], variabilization: {}}, {id: "a1268beother23a-h6", type: "hint", dependencies: ["a1268beother23a-h4"], title: "Solving For x", text: "$$u=-1$$, $$x=\\sqrt{-1}=i$$, which is not a real number. So we ignore it here.", variabilization: {}}, ]; export {hints};