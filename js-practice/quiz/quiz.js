var user = {};
var responses = [];

function getName(){
	user.name = prompt('What is your name?');
	return;
}

function yesOrNo(question,correctAnswer) {
	var answer = prompt(question + '\nPlease answer \'yes\' or \'no\'.');

	if (answer.toLowerCase() != 'yes' && answer.toLowerCase() != 'no'){
		alert('You must answer \'yes\' or \'no\'.');
		return yesOrNo(question,correctAnswer);
	} 

	if (answer.toLowerCase() === correctAnswer) {
		responses.push(true);
	} else {
		responses.push(false);
	}

	return;
}

function multipleChoice(question,aAnswer,bAnswer,cAnswer,dAnswer,correctAnswer){
	var answer = prompt(question + '\nPlease enter \'a\', \'b\' ,\'c\' or \'d\'.\na. '
					+ aAnswer + '\nb. '
					+ bAnswer + '\nc. '
					+ cAnswer + '\nd. '
					+ dAnswer + '\n');

	if (['a','b','c','d'].indexOf(answer.toLowerCase()) < 0) {
		alert('You must answer \'a\', \'b\' ,\'c\' or \'d\'.');
			return multipleChoice(question,aAnswer,bAnswer,cAnswer,dAnswer,correctAnswer);
	}

	if (answer.toLowerCase() === correctAnswer) {
		responses.push(true);
	} else {
		responses.push(false);
	}

	return;

}

function evaluate(responsesArray) {
	var correctAnswers = 0, incorrectAnswers = 0;

	for (index in responsesArray) {
		if (responsesArray[index] === true) {
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
	}

	user.correct = correctAnswers;
	user.incorrect = incorrectAnswers;
	showResults();
	return;
}

function showResults() {
	postscript = "";

	switch (user.correct) {
		case 0:
		case 1:
			postscript = "Keep studying, better luck next time.";
		break;
		case 2:
		case 3:
			postscript = "Not bad, but you can do better. Try again.";
		break;
		case 4:
			postscript = "You clever clot. Well done."
		break;
		case 5:
			postscript = "You aced it! You are a JS wiz."
		break;
	} 

	alert('You got ' + user.correct + ' answers correct and ' + 
				user.incorrect + ' answers incorrect. \n' + postscript)

	return;
}

getName();
yesOrNo('Is > -1 better than >=0?','yes');
multipleChoice('What was the original name of JavaScript?',
				'LiveScript',
				'MicroScript',
				'Latte',
				'Mocha',
				'd');
yesOrNo('Does JavaScript stem from Java?','no');
multipleChoice('if var x1 = "999 000" then Number(x1) will be:','NaN','undefined','999 000','999,000.00','a');
multipleChoice('What is the advantage of using strict mode?',
					'Otherwise silent errors are corrected for you.',
					'Some previously accepted mistakes are turned into errors.',
					'Your code is automatically made more efficient.',
					'All of the above.',
					'b');

evaluate(responses);
