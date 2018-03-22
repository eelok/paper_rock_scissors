

const userScore = 0;
const computerScor = 0;

const userScor_span = document.getElementById('user-score');
const computerScor_span = document.getElementById('computer-score');
const scoreBord_div = document.querySelector('.scoreBord');
const result_div = document.querySelector('.result');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumbers = Math.floor(Math.random() * 3);
    return choices[randomNumbers];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            console.log('USER WINS');
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            console.log('USER LOSE');
            break;
        case 'rr':
        case 'ss':
        case 'pp':    
            console.log('It is a draw.');
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