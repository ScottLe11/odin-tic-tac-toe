console.log("hello")


const Player = (name, piece) => {
    return {name, piece};
}


const gameBoard = (function () {
    let createBoard = () => [ " ", " ", " ",
                                    " ", " ", " ",
                                    " ", " ", " "];
    
    let board = createBoard();
    const getBoard = () => board;
    const setPiece = (piece, index) => {
        if (board[index] === " "){
            board[index] = piece;
        }
        else{
            console.log("Taken space. Try again");
            return false;
        }
        return true;
        
    };

    return {getBoard, setPiece};
})();

const gameController = (function () {
    let turn = "X";
    const getTurn = () => turn;
    const switchTurn = () => {
        turn = (turn === "X") ? "O" : "X";
    };


    const winConditions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [6,4,2]
    ];

    const checkWinConditions = function(){
        const board = gameBoard.getBoard();
        
        
        for (let i = 0; i < winConditions.length; ++i){
            if (board[winConditions[i][0]] != " " && board[winConditions[i][0]] === board[winConditions[i][1]] &&
                 board[winConditions[i][1]] === board[winConditions[i][2]]){
                    //console.log(i);
                    return true;
                }
        }
        return false;
    } 

    const playRound = (index) => {
        //player places piece
        valid_action = gameBoard.setPiece(getTurn(), index);
        if (valid_action === false){
            switchTurn();
        }
        console.log(gameBoard.getBoard());
        //check win condition
        if (checkWinConditions() === true){
            //game ends
            console.log("Player " + getTurn() + " Wins");
        }
        else{
            switchTurn();    
        }
    }

    return {playRound, getTurn};
})();



// const player1 = Player("Alice", "X");
// const player2 = Player("Bob", "O");

gameController.playRound(0);
gameController.playRound(0);
gameController.playRound(3);
gameController.playRound(1);
gameController.playRound(4);
gameController.playRound(8);
gameController.playRound(5);

