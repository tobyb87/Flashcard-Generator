var inquirer = require("inquirer");
var fs = require("fs");
var correct = 0;
var wrong = 0;
var cardArray = [];

function flashcards() {
    inquirer.prompt([{
        type: 'list',
        name: 'userType',
        message: 'What would you like to do?',
        choices: ['create-basic-cards', 'create-cloze-cards', 'Quit']
    }]).then(function(choice) {
        if(choice.userType === 'create-basic-cards') {
            readCards('log.txt');
            createCards(basicPrompt, 'log.txt');
        } else if (choice.userType === 'create-cloze-cards') {
            readCards('cloze-log.txt');
            createCards(clozePrompt, 'cloze-log.txt');
        } else if (choice.userType === 'Quit') {
            return;
        }
    });
}

function readCards(logFile) {
    cardArray = [];
        fs.readFile(logFile, "utf8", function(error, data) {

        var jsonContent = JSON.parse(data);

        for (let i = 0; i < jsonContent.length; i++) {
            cardArray.push(jsonContent[i]);
        }
    });
};

function createCards(promptType, logFile) {
    inquirer.prompt(promptType).then(function(answers) {
        cardArray.push(answers);
        if(answers.makeMore) {
            createCards(promptType, logFile);
        } else {
            writeTolog(logFile, JSON.stringify(cardArray));
            flashcards()
        }
    });
};

function writeTolog(logFile, info) {
    fs.writeFile(logFile, info, function(err) {
        if (err)
            console.log(err);
    });
}

var basicPrompt = [{
    name: "front",
    message: "Enter front of card: "
}, {
    name: "back",
    message: "Enter back of card: " 
}, {
    type: 'confirm',
    name: 'makeMore',
    message: 'Create another card? (Press enter for YES)',
    default: true
}]

var clozePrompt = [{
    name: "text",
    message: "Enter some text then enter the text that you want to hide in parentheses, for example: 'Toby Rules (you drool)'",
    validate: function(value) {
        var parentheses = /\(\w.+\)/;
        if (value.search(parentheses) > -1) {
            return true;
        }
        return 'Put a word in your sentence in parentheses'
    }
}, {
    type: 'confirm',
    name: 'makeMore',
    message: 'Create another card? (hit enter for YES)',
    default: true
}]

flashcards();