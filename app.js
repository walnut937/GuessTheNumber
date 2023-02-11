//Highscore 
let highscore = 0
//random number stored below and generating
let number = Math.floor(Math.random()*21)
//score stored in score_value
let score_value = (document.getElementById('score').innerText)
//click function 
document.getElementById('check').addEventListener('click', function(){
    //input value stored in guess
    let guess = Number(document.getElementById('input').value)
    //if score is above 0
    if(score_value!=0){
        //if input value is empty
        if(!guess){
            document.getElementById('message').innerText = '🔴 No number'
        // guess == number (compare)
        }else if(guess == number){
            document.getElementById('message').innerText = '🎉Correct Guess'
            document.getElementById('random_number').innerText = number
            document.body.style.background = 'green'
            //highscore logic applied here
            if(highscore < score_value){
                highscore = score_value
                document.getElementById('highscore').innerText = highscore    
            }
        // guess > number (compare)
        }else if(guess > number){
            document.getElementById('message').innerText = 'Too High'
            //the score value will be decreased by each wrong guess
            score_value --
            score.innerText = score_value
        // guess < number (compare)
        }else if(guess < number){
            document.getElementById('message').innerText = 'Too Low'
            score_value --
            score.innerText = score_value
        }
    // if score is below 0 or exactly 0
    }else{
        document.getElementById('message').innerText = ' You Failed, Try Again!'
        document.getElementById('message').style.background = 'red'
        document.getElementById('message').style.color = 'white'
        document.getElementById('message').style.display = 'inline-block'
    }
})
//reseting the game 
document.getElementById('reset').addEventListener('click', function(){
    score_value = 20
    number = Math.floor(Math.random()*21)
    document.getElementById('score').innerText = score_value
    document.getElementById('message').innerText = 'Guessing number ....'
    document.getElementById('input').value = ''
    document.getElementById('random_number').innerText = '?' 
    document.body.style.background = 'black'
})