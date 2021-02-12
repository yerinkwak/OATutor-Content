var hints = [{id: "baye5a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)"}, {id: "baye5a-h2", type: "hint", dependencies: ["baye5a-h1"], title: "Events", text: "Let D denote the event ‘you have the disease’, N denote ‘you do not have the disease', and P denote ‘you tested positive.’ By Bayes Theorem, P(D$$\mid$$P)=P(D)P(P$$\mid$$D)/P(P)"}, {id: "baye5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.005"], dependencies: ["baye5a-h2"], title: "P(D)", text: "What is the probability that a random person has the disease? Round your answer to three decimal places", subHints: [{id: "baye5a-h3-s1", type: "hint", dependencies: [], title: "P(D)", text: "The frequency of the disease in the population is 0.5%, so the probability that a randomly chosen person has the disease is 0.005"}]}, {id: "baye5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.900"], dependencies: ["baye5a-h3"], title: "P(P$$\mid$$D)", text: "What is the probability that a random person tests positive, given that they have the disease? Round your answer to 3 decimal places", subHints: [{id: "baye5a-h4-s1", type: "hint", dependencies: [], title: "P(P$$\mid$$D)", text: "The test has a 10% false negative rate (person has the disease but tests negative). Thus the true positive rate (person has the disease and tests positive) is 90%, and the probability that a random person tests positive, given that they have the disease, is 0.900"}]}, {id: "baye5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.054"], dependencies: ["baye5a-h4"], title: "P(P)", text: "What is the probability that a random person tests positive? Round your answer to 3 decimal places", subHints: [{id: "baye5a-h5-s1", type: "hint", dependencies: [], title: "P(P)", text: "There are two cases where a person tests positive: the person has the disease and tests positive, or the person does not have the disease and tests positive. So, P(P)=P(P$$\mid$$D)P(D)+P(P$$\mid$$N)P(N)"}, {id: "baye5a-h5-s2", type: "hint", dependencies: ["baye5a-h5-s1"], title: "P(P$$\mid$$D)P(D)", text: "P(D) and P(P$$\mid$$D) were found to be 0.005 and 0.900. Thus P(P$$\mid$$D)P(D)=0.005*0.900=0.0045"}, {id: "baye5a-h5-s3", type: "hint", dependencies: ["baye5a-h5-s2"], title: "P(N)", text: "The frequency of the disease in the population is 0.5%, so the frequency of not having the disease is 99.5%, and the probability that a randomly chosen person does not have the disease P(N) is 0.995"}, {id: "baye5a-h5-s4", type: "hint", dependencies: ["baye5a-h5-s3"], title: "P(P$$\mid$$N)", text: "The test has a 5% false positive rate (person does not have the disease but tests positive). Thus the probability that a random person tests positive, given that they do not have the disease, P(P$$\mid$$N) is 0.050"}, {id: "baye5a-h5-s5", type: "hint", dependencies: ["baye5a-h5-s4"], title: "P(P$$\mid$$N)P(N)", text: "P(P$$\mid$$N)P(N)=0.050*0.995=0.04975"}, {id: "baye5a-h5-s6", type: "hint", dependencies: ["baye5a-h5-s5"], title: "P(P)", text: "P(P)=P(P$$\mid$$D)P(D)+P(P$$\mid$$N)P(N)=0.0045+0.04975=0.05425"}]}, {id: "baye5a-h6", type: "hint", dependencies: ["baye5a-h5"], title: "P(D$$\mid$$P)", text: "Use P(D), P(P$$\mid$$D), and P(P) to solve for P(D$$\mid$$P) using Bayes Theorem"}, {id: "baye5a-h7", type: "hint", dependencies: ["baye5a-h6"], title: "P(D$$\mid$$P)", text: "P(D$$\mid$$P)=P(D)P(P$$\mid$$D)/P(P)=0.005*0.9/0.05425=0.083"}, ]; export {hints};