var quotes;

// Write your code here




quotes = [
    {
        "quoteAuthor": "Thomas Edison",
        "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration."
    },
    {
        "quoteAuthor": "Yogi Berra",
        "quoteText": "You can observe a lot just by watching."
    },
    {
        "quoteAuthor": "Abraham Lincoln",
        "quoteText": "A house divided against itself cannot stand."
    },
    {
        "quoteAuthor": "Johann Wolfgang von Goethe",
        "quoteText": "Difficulties increase the nearer we get to the goal."
    },
    {
        "quoteAuthor": "Byron Pulsifer",
        "quoteText": "Fate is in your hands and no one elses"
    },
    {
        "quoteAuthor": "Lao Tzu",
        "quoteText": "Be the chief but never the lord."
    },
    {
        "quoteAuthor": "Carl Sandburg",
        "quoteText": "Nothing happens unless first we dream."
    },
    {
        "quoteAuthor": "Aristotle",
        "quoteText": "Well begun is half done."
    },
    {
        "quoteAuthor": "Yogi Berra",
        "quoteText": "Life is a learning experience, only if you learn."
    },
    {
        "quoteAuthor": "Margaret Sangster",
        "quoteText": "Self-complacency is fatal to progress."
    },
    {
        "quoteAuthor": "Buddha",
        "quoteText": "Peace comes from within. Do not seek it without."
    },
    {
        "quoteAuthor": "Byron Pulsifer",
        "quoteText": "What you give is what you get."
    },
    {
        "quoteAuthor": "Iris Murdoch",
        "quoteText": "We can only learn to love by loving."
    },
    {
        "quoteAuthor": "Karen Clark",
        "quoteText": "Life is change. Growth is optional. Choose wisely."
    },
    {
        "quoteAuthor": "Wayne Dyer",
        "quoteText": "You'll see it when you believe it."
    },
    {
        "quoteAuthor": "Unknown",
        "quoteText": "Today is the tomorrow we worried about yesterday."
    },
    {
        "quoteAuthor": "Unknown",
        "quoteText": "It's easier to see the mistakes on someone else's paper."
    },
    {
        "quoteAuthor": "Unknown",
        "quoteText": "Every man dies. Not every man really lives."
    },
    {
        "quoteAuthor": "Lao Tzu",
        "quoteText": "To lead people walk behind them."
    },
    {
        "quoteAuthor": "William Shakespeare",
        "quoteText": "Having nothing, nothing can he lose."
    },
    {
        "quoteAuthor": "Henry J. Kaiser",
        "quoteText": "Trouble is only opportunity in work clothes."
    },
    {
        "quoteAuthor": "Publilius Syrus",
        "quoteText": "A rolling stone gathers no moss."
    },
    {
        "quoteAuthor": "Napoleon Hill",
        "quoteText": "Ideas are the beginning points of all fortunes."
    },
    {
        "quoteAuthor": "Donald Trump",
        "quoteText": "Everything in life is luck."
    },
    {
        "quoteAuthor": "Lao Tzu",
        "quoteText": "Doing nothing is better than being busy doing nothing."
    },
    {
        "quoteAuthor": "Benjamin Spock",
        "quoteText": "Trust yourself. You know more than you think you do."
    },
    {
        "quoteAuthor": "Confucius",
        "quoteText": "Study the past, if you would divine the future."
    },
    {
        "quoteAuthor": "Unknown",
        "quoteText": "The day is already blessed, find peace within it."
    },
    {
        "quoteAuthor": "Sigmund Freud",
        "quoteText": "From error to error one discovers the entire truth."
    },
    {
        "quoteAuthor": "Benjamin Franklin",
        "quoteText": "Well done is better than well said."
    },
    {
        "quoteAuthor": "Ella Williams",
        "quoteText": "Bite off more than you can chew, then chew it."
    },
    {
        "quoteAuthor": "Buddha",
        "quoteText": "Work out your own salvation. Do not depend on others."
    },
    {
        "quoteAuthor": "Benjamin Franklin",
        "quoteText": "One today is worth two tomorrows."
    },
    {
        "quoteAuthor": "Christopher Reeve",
        "quoteText": "Once you choose hope, anythings possible."
    },
    {
        "quoteAuthor": "Albert Einstein",
        "quoteText": "God always takes the simplest way."
    },
    {
        "quoteAuthor": "Charles Kettering",
        "quoteText": "One fails forward toward success."
    },
    {
        "quoteAuthor": "Unknown",
        "quoteText": "From small beginnings come great things."
    },
    {
        "quoteAuthor": "Chinese proverb",
        "quoteText": "Learning is a treasure that will follow its owner everywhere"
    },
    {
        "quoteAuthor": "Socrates",
        "quoteText": "Be as you wish to seem."
    },
    {
        "quoteAuthor": "V. Naipaul",
        "quoteText": "The world is always in movement."
    },
    {
        "quoteAuthor": "John Wooden",
        "quoteText": "Never mistake activity for achievement."
    },
    {
        "quoteAuthor": "Haddon Robinson",
        "quoteText": "What worries you masters you."
    },
    {
        "quoteAuthor": "Pearl Buck",
        "quoteText": "One faces the future with ones past."
    },
    {
        "quoteAuthor": "Brian Tracy",
        "quoteText": "Goals are the fuel in the furnace of achievement."
    },
    {
        "quoteAuthor": "Leonardo da Vinci",
        "quoteText": "Who sows virtue reaps honour."
    },
    {
        "quoteAuthor": "Dalai Lama",
        "quoteText": "Be kind whenever possible. It is always possible."
    },
    {
        "quoteAuthor": "Chinese proverb",
        "quoteText": "Talk doesn't cook rice."
    },
    {
        "quoteAuthor": "Buddha",
        "quoteText": "He is able who thinks he is able."
    },
    {
        "quoteAuthor": "Larry Elder",
        "quoteText": "A goal without a plan is just a wish."
    },
    {
        "quoteAuthor": "Michael Korda",
        "quoteText": "To succeed, we must first believe that we can."
    },
    {
        "quoteAuthor": "Albert Einstein",
        "quoteText": "Learn from yesterday, live for today, hope for tomorrow."
    },
    {
        "quoteAuthor": "James Lowell",
        "quoteText": "A weed is no more than a flower in disguise."
    },
    {
        "quoteAuthor": "Yoda",
        "quoteText": "Do, or do not. There is no try."
    },
    {
        "quoteAuthor": "Harriet Beecher Stowe",
        "quoteText": "All serious daring starts from within."
    },
    {
        "quoteAuthor": "Byron Pulsifer",
        "quoteText": "The best teacher is experience learned from failures."
    },
    {
        "quoteAuthor": "Murray Gell-Mann",
        "quoteText": "Think how hard physics would be if particles could think."
    },
    {
        "quoteAuthor": "John Lennon",
        "quoteText": "Love is the flower you've got to let grow."
    },
    {
        "quoteAuthor": "Napoleon Hill",
        "quoteText": "Don't wait. The time will never be just right."
    },
    {
        "quoteAuthor": "Pericles",
        "quoteText": "Time is the wisest counsellor of all."
    },
    {
        "quoteAuthor": "Napoleon Hill",
        "quoteText": "You give before you get."
    },
    {
        "quoteAuthor": "Socrates",
        "quoteText": "Wisdom begins in wonder."
    },
    {
        "quoteAuthor": "Baltasar Gracian",
        "quoteText": "Without courage, wisdom bears no fruit."
    },
    {
        "quoteAuthor": "Aristotle",
        "quoteText": "Change in all things is sweet."
    },
    {
        "quoteAuthor": "Byron Pulsifer",
        "quoteText": "What you fear is that which requires action to overcome."
    },
    {
        "quoteAuthor": "Cullen Hightower",
        "quoteText": "When performance exceeds ambition, the overlap is called success."
    },
    {
        "quoteAuthor": "African proverb",
        "quoteText": "When deeds speak, words are nothing."
    },
    {
        "quoteAuthor": "Wayne Dyer",
        "quoteText": "Real magic in relationships means an absence of judgement of others."
    },
    {
        "quoteAuthor": "Albert Einstein",
        "quoteText": "I never think of the future. It comes soon enough."
    },
    {
        "quoteAuthor": "Ralph Emerson",
        "quoteText": "Skill to do comes of doing."
    },
    {
        "quoteAuthor": "Sophocles",
        "quoteText": "Wisdom is the supreme part of happiness."
    },
    {
        "quoteAuthor": "Maya Angelou",
        "quoteText": "I believe that every person is born with talent."
    },
    {
        "quoteAuthor": "Abraham Lincoln",
        "quoteText": "Important principles may, and must, be inflexible."
    },
    {
        "quoteAuthor": "Richard Evans",
        "quoteText": "The undertaking of a new action brings new strength."
    },
    {
        "quoteAuthor": "Ralph Emerson",
        "quoteText": "The years teach much which the days never know."
    },
    {
        "quoteAuthor": "Ralph Emerson",
        "quoteText": "Our distrust is very expensive."
    },
    {
        "quoteAuthor": "Bodhidharma",
        "quoteText": "All know the way; few actually walk it."
    },
    {
        "quoteAuthor": "Johann Wolfgang von Goethe",
        "quoteText": "Great talent finds happiness in execution."
    }
];

var quotetext = document.querySelector(".quote p");
var quoteauth = document.querySelector(".quote-text span");

function changequotes(){
    var quote = quotes[random()];
    quotetext.innerHTML = quote.quoteText;
    quoteauth.innerHTML = quote.quoteAuthor;
}
// console.log(changequotes);
function random(){
    let randomnumber = 0
    randomnumber = Math.floor(Math.random() * 77);
    return randomnumber;
}


function generate(e){
    if(e.code === "Space"){
        changequotes();
    }
}
window.addEventListener("keydown", generate);


 

