const quoteLocation = document.getElementById("quote-location");
const selectedCategory = document.getElementById("selected-category");
const generateQuoteButton = document.getElementById("generate-quote");

const programmingQuotes = [
	{ id: 1, text: "Talk is cheap. Show me the code.", category: "focus", author: "Linus Torvalds" },
	{ id: 2, text: "Programs must be written for people to read, and only incidentally for machines to execute.", category: "learning", author: "Harold Abelson" },
	{ id: 3, text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", category: "learning", author: "Martin Fowler" },
	{ id: 4, text: "First, solve the problem. Then, write the code.", category: "focus", author: "John Johnson" },
	{ id: 5, text: "Code is like humor. When you have to explain it, it’s bad.", category: "fun", author: "Cory House" },
	{ id: 6, text: "Experience is the name everyone gives to their mistakes.", category: "persistence", author: "Oscar Wilde" },
	{ id: 7, text: "Before software can be reusable it first has to be usable.", category: "learning", author: "Ralph Johnson" },
	{ id: 8, text: "Fix the cause, not the symptom.", category: "focus", author: "Steve Maguire" },
	{ id: 9, text: "Simplicity is the soul of efficiency.", category: "creativity", author: "Austin Freeman" },
	{ id: 10, text: "Make it work, make it right, make it fast.", category: "persistence", author: "Kent Beck" },
	{ id: 11, text: "The only way to learn a new programming language is by writing programs in it.", category: "learning", author: "Dennis Ritchie" },
	{ id: 12, text: "Programming isn’t about what you know; it’s about what you can figure out.", category: "learning", author: "Chris Pine" },
	{ id: 13, text: "Debugging is like being the detective in a crime movie where you are also the murderer.", category: "fun", author: "Filipe Fortes" },
	{ id: 14, text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", category: "creativity", author: "Antoine de Saint-Exupéry" },
	{ id: 15, text: "Stay curious, keep coding, and embrace failure as feedback.", category: "persistence", author: "Unknown" },
];

//Loop through the programmingQuotes array using map.
//Pull out any of the ones with the same category as the selection
//Return one of them

function categorizedQuotes() {
	programmingQuotes
		.filter((category) => category.category === selectedCategory.value)
		.map((quote) => {
			return quote.text;
		});

	let random = Math.floor(Math.random() * programmingQuotes.length);
	return programmingQuotes[random].text;
}

generateQuoteButton.addEventListener("click", () => {
	console.log(categorizedQuotes());
});
