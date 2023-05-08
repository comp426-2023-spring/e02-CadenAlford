export function rps(shot){
    const moveSET = ['rock', 'paper', 'scissors'];
    if (shot == undefined){
        return {'player': moveSET[Math.floor(Math.random() * moveSET.length)]};
    }
    else{
        shot = shot.toLowerCase();

        //Checks shot as valid answer
        if(!moveSET.includes(shot)){
            return 'error';
        }
        
        //Randomized Opp 
        let opponent = moveSET[Math.floor(Math.random() * moveSET.length)];

        //Check Cases and Return Results
        //Tie 
        if(shot === opponent){
            return {'player': shot, 'opponent': opponent, 'result': 'tie'};
        }
        //Rock v Sciss
        if (shot === 'rock' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        //Rock v Paper
        if (shot === 'rock' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
         //Paper v Sciss
         if (shot === 'paper' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
        //Paper v Rock
        if (shot === 'paper' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        //Sciss v Rock
        if (shot === 'scissors' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
        //Sciss v Paper
        if (shot === 'scissors' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
    }
}
    export function rpsls(shot) {
        const moveSET = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    
        if (shot === undefined) {
            return {'player': moveSET[Math.floor(Math.random() * moveSET.length)]};
        } else {
            //standardize answer
            shot = shot.toLowerCase();
    
             //Validity of shot
             if (!moveSET.includes(shot)) {
                return 'error';
            }
    
            //randomize opponent's move
            let opponent = moveSET[Math.floor(Math.random() * moveSET.length)];
    
            //Case check and result return
            if (shot === opponent) {
                return {'player': shot, 'opponent': opponent, 'result': 'tie'};
            }
            //rock v sciss or liz
            if (shot === 'rock' && (opponent === 'scissors' || opponent === 'lizard')) {
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
            //rock v paper or spock
            if (shot === 'rock' && (opponent === 'paper' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }
            //paper v rock or spock
            if (shot === 'paper' && (opponent === 'rock' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
            //paper v sciss or liz
            if (shot === 'paper' && (opponent === 'scissors' || opponent === 'lizard')) {
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }
            //sciss v paper or liz
            if (shot === 'scissors' && (opponent === 'paper' || opponent === 'lizard')) {
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
            //sciss v rock or spock
            if (shot === 'scissors' && (opponent === 'rock' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }
            //liz v paper or spock
            if (shot === 'lizard' & (opponent === 'paper' || opponent === 'spock')) {
                if (opponent === 'spock') {
                    opponent = 'Spock';
                }
                return {'player': shot, 'opponent': opponent, 'result': 'win'};
            }
            //liz v rock or sciss
            if (shot === 'lizard' & (opponent == 'rock' || opponent == 'scissors')) {
                return {'player': shot, 'opponent': opponent, 'result': 'lose'};
            }
            //spock v rock or sciss
            if (shot === 'spock' & (opponent === 'rock' || opponent === 'scissors')) {
                return {'player': 'Spock', 'opponent': opponent, 'result': 'win'};
            }
            //spock v paper or liz
            if (shot === 'spock' & (opponent === 'paper' || opponent === 'lizard')) {
                return {'player': 'Spock', 'opponent': opponent, 'result': 'lose'};
            }
    }
}   