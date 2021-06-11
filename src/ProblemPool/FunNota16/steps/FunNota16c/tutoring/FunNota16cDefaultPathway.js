var hints = [{id: "FunNota16c-h1", type: "hint", dependencies: [], title: "Evaluating functions", text: "Given the equation for a function, we should replace the input variable in the equation with the value provided and then calculate the result.", variabilization: {}}, {id: "FunNota16c-h2", type: "hint", dependencies: ["FunNota16c-h1"], title: "Replacement", text: "Replace the variable x with -a, and we get $$f(-a)=-\\left(5\\right) {\\left(-a\\right)}^2+\\left(2\\right) \\left(-a\\right)-\\left(1\\right)$$.", variabilization: {}}, {id: "FunNota16c-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-\\left(5\\right) a^2-\\left(2\\right) a-\\left(1\\right)$$"], dependencies: ["FunNota16c-h2"], title: "Simplification", text: "Simplify the expression $$-\\left(5\\right) {\\left(-a\\right)}^2+\\left(2\\right) \\left(-a\\right)-\\left(1\\right)$$. What do you get?", variabilization: {}}, ]; export {hints};