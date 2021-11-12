import { createStore } from 'redux';

//initial state for my store
const initial = {
    current: 'red', //can also be yellow
    board: [
        [],  // col 0
        [],  // col 1
        [],  // col 2
        [],  // col 3
        [],  // col 4
        [],  // col 5
        [],  // col 6
    ],


};

export let gameOver = false;
//function to drop tiles into the board
function reducer(state, action){
    if(gameOver === false){
    if(action.type === 'DROP_TILE'){

        console.log('dropping onto col ' + action.payload);

        const tile = state.current;
        const col = state.board[action.payload].concat(tile);

        const board = state.board.slice();
        board[action.payload] = col;

        checkForWinner(board)
        checkForTie(board)

        return{
            current: state.current === 'red' ? 'yellow' : 'red',
            board: board,
        };
    }
return state;
//if game is over send an alert saying game over
    }else{
        alert("GAME OVER!!!!!!")
        return state;
    }
};
//this function checks if the game is tied
function checkForTie(board){
    //define a counter variable to count the number of cells occupied
    let counter = 0
    //loop through each cell
    for(let y=0; y<6; y++) { 
        for(let x=0; x<7; x++) {
            //if the cell is undefined increment the counter
            if(typeof board[x][y]!=='undefined') {
                    console.log(board[x][y])
                    counter++
            }
        }
    }
    //if the counter reaches 42 then the game is tied
    if(counter===42){    
        alert("Tie Game!")
        gameOver = true 
    }


}

function checkForWinner(board){
    //check for winner horizontally
   /* for(let x = 0; x < 7; x++){
        for(let y = 0; y < 6; y++){
            if(typeof board[x][y]!=='undefined' && typeof board[x+1][y]!=='undefined' && typeof board[x+2][y]!=='undefined'&& typeof board[x+3][y]!=='undefined') {
                if((board[x][y]===board[x+1][y] && board[x][y]===board[x+2][y] && board[x][y]===board[x+3][y])){
                    alert(board[x][y]+" wins!")
                    gameOver = true
                }
            }

        }
        

    }
    */

    //check for horixontal winner
    //this for loop iterates through each row
    for(let y=0; y<6; y++) {
          
        //this if statement checks for 4 consecutive non undefined cells from x=0 to x=3
        if(typeof board[0][y]!=='undefined' && typeof board[1][y]!=='undefined' && typeof board[2][y]!=='undefined' && typeof board[3][y]!=='undefined') {
            //checks to see if the 4 consecutive non-undefined cells are the same colour
            if((board[0][y]===board[1][y] && board[0][y]===board[2][y] && board[0][y]===board[3][y])){
                alert(board[0][y]+" wins!")
                gameOver = true
            }
        }
         //this if statement checks for 4 consecutive non undefined cells from x=1 to x=4
        if(typeof board[1][y]!=='undefined' && typeof board[2][y]!=='undefined' && typeof board[3][y]!=='undefined' && typeof board[4][y]!=='undefined') {
           //checks to see if the 4 consecutive non-undefined cells are the same colour
            if((board[1][y]===board[2][y] && board[1][y]===board[3][y] && board[1][y]===board[4][y])){
                alert(board[1][y]+" wins!")
                gameOver = true
            }
        }
        //this if statement checks for 4 consecutive non undefined cells from x=1 to x=4
        if(typeof board[2][y]!=='undefined' && typeof board[3][y]!=='undefined' && typeof board[4][y]!=='undefined' && typeof board[5][y]!=='undefined') {
            //checks to see if the 4 consecutive non-undefined cells are the same colour
            if((board[2][y]===board[3][y] && board[2][y]===board[4][y] && board[2][y]===board[5][y])){
                alert(board[2][y]+" wins!")
                gameOver = true
            }
        }
        //this if statement checks for 4 consecutive non undefined cells from x=1 to x=4
        if(typeof board[3][y]!=='undefined' && typeof board[4][y]!=='undefined' && typeof board[5][y]!=='undefined' && typeof board[6][y]!=='undefined') {
           //checks to see if the 4 consecutive non-undefined cells are the same colour
            if((board[3][y]===board[4][y] && board[3][y]===board[5][y] && board[3][y]===board[6][y])){
                alert(board[3][y]+" wins!")
                gameOver = true
            }
        }
}
   

    //check for winner vertically
    //these nested loops and if statements will collectively look for a vertical winner
    //this for loop will loop through all six rows
    for(let y = 0; y < 6;  y++){
        //this for loop will loop through all seven columns
        for(let x = 0; x < 7; x++){
            //this if statement checks for four consctive non-undefined cells (cells that are either red or yellow)
            if(typeof board[x][y]!=='undefined' && typeof board[x][y+1]!=='undefined' && typeof board[x][y+2]!=='undefined' && typeof board[x][y+3]!=='undefined') {
                //this if statement will only be executed if we find 4 consecutive non-undefined cells
                //this if statement checks to see if the four consecutive non-undefined cells are the same colour
                if((board[x][y]===board[x][y+1] && board[x][y]===board[x][y+2] && board[x][y]===board[x][y+3])){
                    //if both if statements are satisfied then we have a winner and the game is over
                    alert(board[x][y]+" wins!")
                    gameOver = true
                }
            }

        }

    }

}

export default createStore(reducer, initial);