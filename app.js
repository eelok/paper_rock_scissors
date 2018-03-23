

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBord_div = document.querySelector('.scoreBord');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumbers = Math.floor(Math.random() * 3);
    return choices[randomNumbers];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 's') return 'Scissors';
    return 'Paper';
}

function win(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win 🤟!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){ userChoice_div.classList.remove('green-glow')}, 300);
}


function lose(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost 💩!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){ userChoice_div.classList.remove('red-glow')}, 300);
}
function draw(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It is a draw 🤷!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){ userChoice_div.classList.remove('gray-glow')}, 300);
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':    
            draw(userChoice, computerChoice);
            break;   
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game('r')
        // console.log('hey you clicked on rock');
    });
    paper_div.addEventListener('click', function(){
        game('p');
        // console.log('hey you clicked on paper');
    })
    scissors_div.addEventListener('click', function(){
        game('s');
        // console.log('hey you clicked on scissors');
    })
}
main();