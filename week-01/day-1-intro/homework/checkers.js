/*==============================================================
Let's Play Checkers!
==============================================================*/



var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];


/*==============================================================
setSquare, which places a player (either 'R' or 'B') at a particular row and column on the board.
==============================================================*/



function setSquare(player, row, col) {
    if (player === "R") {
        checkerboard[row][col] = "R";
    }
    else if (player === "B") {
        checkerboard[row][col] = "B";
    }
    else {
        console.log("Wrong! Pick again.");
    }
    return checkerboard;
}

//setSquare("R", 1, 1);

//console.log(checkerboard);



/*==============================================================
getPieceAt, which returns the piece at a particular row and column; if there's no piece at that position, it should return null.
=============================================================*/



function getPieceAt(row, col) {
    if (checkerboard[row][col] == "R") {
        return "R";
    }
    else if (checkerboard[row][col] == "B") {
        return "B";
    }
    else {
        return null;
    }
}

//getPieceAt(1,1);

//console.log(checkerboard);



/*==============================================================
clearBoard()
This function will go through every cell in checkerboard (see previous exercise) and set that cell's value to null.
==============================================================*/



function clearBoard() {
    return checkerboard[row][col] === null;
    }

//console.log(clearboard());



/*==============================================================
setUpRed()
This function will set up the red pieces on our checkerboard by setting the value of each cell that should hold a red piece to 'R'. For the purposes of this exercise, assume that the red pieces should be laid out at the 'top' of the board
==============================================================*/



function setUpRed(x) {
    return (x = "R");
}

for (var row = 0; row < 3; row ++) {
    for (var col = 0; col < 8; col ++) {
        if (row % 2 === 0 && col % 2 === 0) {
            setUpRed(setSquare("R", row, col));
        }
        else if (row % 2 !== 0 && col % 2 !== 0) {
            setUpRed(setSquare("R", row, col));
        }
    }
}

//console.log(checkerboard);



/*==============================================================
setUpBlack()
This function should work similarly to setUpRed, placing black pieces ('B') on the board at the positions indicated in the picture.
==============================================================*/



function setUpBlack(y) {
    return (y = "R");
}

for (var row = 5; row < 8; row ++) {
    for (var col = 0; col < 8; col ++) {
        if (row % 2 === 0 && col % 2 === 0) {
            setUpBlack(setSquare("B", row, col));
        }
        else if (row % 2 !== 0 && col % 2 !== 0) {
            setUpBlack(setSquare("B", row, col));
        }
    }
}

console.log(checkerboard);



/*==============================================================
Create a nested array called pieces to store the locations of every piece on the board.

pieces should be an associative array, with two keys : 'red' and 'black'. 

Each of these keys should correspond to a normal array listing out all of the different pieces for that color. 

Each piece should be represented as a two-element array in the pattern of [row,col]; 

for example, the list of red pieces would include [0,0], [0,2], [0,4], etc.
==============================================================*/

































