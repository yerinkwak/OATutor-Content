var hints = [{id: "IneqApp20a-h1", type: "hint", dependencies: [], title: "Sum Up Expenses", text: "The first thing we need to do is to solve for the total expenses that the five student government officers need to pay. Once we know the total expense, we can find out the additional amount of money that the officers need to make up for by washing cars."}, {id: "IneqApp20a-h2", type: "hint", dependencies: ["IneqApp20a-h1"], title: "Sum Up Expenses", text: "To find the total expense, we sum up the expense from registration ($110), transportation and food ($375), and hotel (5*$42)."}, {id: "IneqApp20a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["695.0"], dependencies: ["IneqApp20a-h2"], title: "Sum Up Expenses", text: "What is $$\\left(110\\right)+\\left(375\\right)+\\left(5\\right) \\left(42\\right)$$?"}, {id: "IneqApp20a-h4", type: "hint", dependencies: ["IneqApp20a-h3"], title: "Amount that Needs to be Earned", text: "We know that the five student government officers need $695 in total, but they only have $450 currently. What is the amount that they will need to earn by themselves?"}, {id: "IneqApp20a-h5", type: "hint", dependencies: ["IneqApp20a-h4"], title: "Creating an Inequality", text: "We know that the five student government officers need to earn at least $245 by washing cars and they charge $5 per car. If we let x represent the number of cars they wash, then the total earning from the car wash would be 5x. Therefore, we get the inequality $$\\left(5\\right) x \\geq 245$$."}, {id: "IneqApp20a-h6", type: "hint", dependencies: ["IneqApp20a-h5"], title: "Solving the Inequality", text: "Now, we must solve the inequality for x by algebrically manipulating it."}, {id: "IneqApp20a-h7", type: "hint", dependencies: ["IneqApp20a-h6"], title: "Solving the Inequality", text: "To solve for x, we can divide both sides by 5 to isolate x. We now have $$x \\geq 49$$ as our inequality."}, {id: "IneqApp20a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["49.0"], dependencies: ["IneqApp20a-h7"], title: "Creating a Sentence-Answer", text: "Since x must be greater than or equal to 49, what is the minimum number of cars the student government officers have to wash?"}, ]; export {hints};