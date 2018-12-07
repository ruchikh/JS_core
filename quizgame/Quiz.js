let displayquestion = document.querySelector('.question');
let displayanswer = document.querySelector('.ullist');
let btnstart = document.querySelector('.btnstart');
let btnstartgk = document.querySelector('.btnstart1');
let btnstartanimal = document.querySelector('.btnstart2');
let btnsubmit = document.querySelector('.btn')
let lowerparagraph = document.querySelector('.paragraph');
let containerdisplay = document.querySelector('.container');
let heading = document.querySelector('h1')
let quizstyle = document.querySelector('.quizapp');
displayquestion.style.display = 'none';

class Question{
	constructor(text, choice, answer){
		this.text = text;
		this.choice = choice;
		this.answer = answer;
	}

}

class Quiz {
	constructor(){
	this.score = 0;
	this.currentindex = 0;
}
 displayScore() {
    displayquestion.innerHTML = `Your score is ${this.score}`;
  }

  displayQuestionAnimal(){
  	if (this.currentindex>= questionlistAnimal.length){
  		return displayquestion.innerText = `Your score is ${this.score}`;
  	}
  	displayquestion.innerText = questionlistAnimal[this.currentindex].text;
  	lowerparagraph.innerHTML = `Question ${this.currentindex + 1} out of ${questionlistAnimal.length}`

  }



	displayQuestion(){
		if(this.currentindex >= questionlist.length){
      return this.displayScore();
    }
		displayquestion.innerText = questionlist[this.currentindex].text;
    lowerparagraph.innerHTML = `Question ${this.currentindex + 1} out of ${questionlist.length}`
}

 	displayAnswerOption(){
 		displayanswer.innerHTML = "";
 	 	(questionlist[this.currentindex].choice).forEach((ele, i)=> { 
 	 	displayanswer.innerHTML += `<li id=${i}>${ele}</li>
 	 	<button class="btn" id=${i} >Submit</button>`;
 	 });
 }

 	displayAnswerAnimal(){
 		displayanswer.innerHTML = "";
 	 	(questionlistAnimal[this.currentindex].choice).forEach((ele, i)=> { 
 	 	displayanswer.innerHTML += `<li id=${i}>${ele}</li>
 	 	<button class="btn" id=${i} >Submit</button>`;
 	 });
 }

   displayQuestionGk(){
  	if (this.currentindex>= questionlistGk.length){
  		return displayquestion.innerText = `Your score is ${this.score}`;
  	}
  	displayquestion.innerText = questionlistGk[this.currentindex].text;
  	lowerparagraph.innerHTML = `Question ${this.currentindex + 1} out of ${questionlistGk.length}`

  }

 displayAnswerGk(){
 		displayanswer.innerHTML = "";
 	 	(questionlistGk[this.currentindex].choice).forEach((ele, i)=> { 
 	 	displayanswer.innerHTML += `<li class="list" id=${i}>${ele}</li>
 	 	<button class="btn" id=${i} >Submit</button>`;
 	 });
 }
 updatescore(){
	return this.currentindex++;
}
}

let quiz = new Quiz;
console.log(quiz);


function displayAll(){
	/*CSS Style*/
	btnstartgk.style.display = 'none';
	btnstartanimal.style.display = 'none';
  containerdisplay.style.margin = '0';
  heading.style.display = 'none';
  quizstyle.style.marginTop = '10em';
  quizstyle.style.marginLeft = '5em';
	displayquestion.style.display = 'inline-block';


	quiz.displayQuestion();
	quiz.displayAnswerOption();
	btnstart.style.display = 'none';
	displayanswer.addEventListener('click', submitquiz);
}

function submitquiz(e){
	if(questionlist[quiz.currentindex].answer == questionlist[quiz.currentindex].choice[e.target.id]){
		console.log(quiz.score);
		quiz.score++;
		console.log(quiz.score);
		quiz.updatescore();
		quiz.displayQuestion();
		quiz.displayAnswerOption();
	} else{
	quiz.updatescore();
  quiz.displayQuestion();
	quiz.displayAnswerOption();
}

}

// Animal

function displayAllAnimal(){
	/*CSS Style*/
	btnstartgk.style.display = 'none';
	btnstartanimal.style.display = 'none';
  containerdisplay.style.margin = '0';
  heading.style.display = 'none';
  quizstyle.style.marginTop = '10em';
  quizstyle.style.marginLeft = '5em';
	displayquestion.style.display = 'inline-block';


	quiz.displayQuestionAnimal();
	quiz.displayAnswerAnimal();
	btnstart.style.display = 'none';
	displayanswer.addEventListener('click', submitquizAmimal);

}
function submitquizAmimal(e){
	if(questionlistAnimal[quiz.currentindex].answer == questionlistAnimal[quiz.currentindex].choice[e.target.id]){
		++quiz.score;
		quiz.updatescore();
		quiz.displayQuestionAnimal();
		quiz.displayAnswerAnimal();
	} else{
	quiz.updatescore();
  quiz.displayQuestionAnimal();
	quiz.displayAnswerAnimal();
}

}


/*QUiz GK*/

function displayAllGk(){
	/*CSS Style*/
	btnstartgk.style.display = 'none';
	btnstartanimal.style.display = 'none';
  containerdisplay.style.margin = '0';
  heading.style.display = 'none';
  quizstyle.style.marginTop = '10em';
  quizstyle.style.marginLeft = '5em';
	displayquestion.style.display = 'inline-block';


	quiz.displayQuestionGk();
	quiz.displayAnswerGk();
	btnstart.style.display = 'none';
	displayanswer.addEventListener('click', submitquizGk);

}
function submitquizGk(e){
	if(questionlistGk[quiz.currentindex].answer == questionlistGk[quiz.currentindex].choice[e.target.id]){
		console.log(quiz.score);
		++quiz.score;
		console.log(quiz.score);
		quiz.updatescore();
		quiz.displayQuestionGk();
		quiz.displayAnswerGk();
	} else{
	quiz.updatescore();
  quiz.displayQuestionGk();
	quiz.displayAnswerGk();
}

}

/*Science Quiz*/

var questionlist = [ 
new Question('Which is the coldest location in the earth? ', ['East Antarctica', 'Genotypic character',  'Cell division'], 'East Antarctica'),
new Question('Which is the hottest place in the earth? ', ['Ethiopia' , 'Protein 3D structure', 'Gene bank protein'], 'Ethiopia'),
new Question('Which is the animal referred as the ship of the desert? ', ['Camel','cow', 'cat'], 'Camel'),
new Question('Which is the nearest star to planet earth?', ['sun','moon', 'thus'], 'sun'),
new Question('Which is the least populated country in the world?', ['Vatican City', 'india', 'US'], 'Vatican City'),
new Question('Which is the heavier metal of these two? Gold or Silver?', ['Gold', 'Genotypic character',  'Cell division'], 'Gold'),
new Question('Which is the longest river on the earth? ', ['Nile', 'Genotypic character',  'Cell division'], 'Nile'),
] ;

/*Animal Quiz*/

var questionlistAnimal = [ 
new Question('Which food is the Giant Panda`s staple or main diet?', ['The bamboo', 'Insects',  'bread'], 'The bamboo'),
new Question('Can bats be classified as birds or mammals.', ['cow' , 'Mammals', 'dog'], 'Mammals'),
new Question('How many pairs of wings does a honey bee have?', ['two','four', 'six'], 'two'),
new Question('Which animal is called a ‘doe’?', ['A doe is a female deer','A doe is a male deer.', 'both'], 'A doe is a female deer'),
new Question('What are female elephants called?', ['Cows','goat', 'both'], 'Cows'),
new Question('Which animal is the largest primate in the world?', ['The Gorilla','lion', 'elephant'], 'The Gorilla'),
] ;

/*GK Quiz*/

var questionlistGk = [ 
new Question('On a normal computer keyboard with which number does * share a key?', ['Eight', 'nine',  'seven'], 'Eight'),
new Question('Which word meaning ‘to become smaller` is also used for a psychiatrist?', ['Shrink' , 'mrink', 'both'], 'Shrink'),
new Question('What was the nationality of the great writer George Bernard Shaw?', ['He was Irish','He was Narish', 'both'], 'He was Irish'),
new Question('What type of an animal is a Samoyed?', ['Dog','Cat', 'Mouse'], 'Dog'),
new Question('Where in the human body is the occiput?', ['Head','Hand', 'eyes'], 'Head'),
new Question('According to the saying, all roads lead to which European capital?', ['Rome','US', 'UK'], 'Rome'),
] ;



btnstart.addEventListener('click', displayAll);
btnstartanimal.addEventListener('click', displayAllAnimal);
btnstartgk.addEventListener('click', displayAllGk);




