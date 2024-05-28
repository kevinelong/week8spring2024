const board = {
    teams : [
        { name:"home", score: 0},
        { name:"away", score: 0},
    ],
    increment : (teamName, amount = 7) => {
        board.teams.find(t=>t.name === teamName).score += amount;
    },
    display : ()=>{
        console.log(`
        HOME: ${board.teams[0].score}  
        AWAY: ${board.teams[1].score}`)
    }
}

board.increment("home");
board.increment("home");
board.increment("away");
board.display();