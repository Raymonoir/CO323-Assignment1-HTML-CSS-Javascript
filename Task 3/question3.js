var grid = [];
var turnNumber = 0;

function reset()
{
    document.getElementById("gameBoard").innerHTML = null;
    grid = [];
    turnNumber = 0;
    document.getElementById("infoBox").innerHTML = "It is player nought's (O) turn.";
    buildBoard();
}


function buildBoard ()
{
    for (var i = 0; i < 9; i ++)
    {
        grid.push(new Cell(document.createElement("div")));
        document.getElementById("gameBoard").appendChild(grid[i].cellDiv);
        grid[i].cellDiv.onclick = grid[i].cellClicked;  
    }     
}


function checkBoard ()
{
    var winner;
    var winningLine;
    
    //Rows
    for (var i = 0; i < 3; i ++)
    { 
        
        
        if ((grid[i *3].player == grid[i*3 + 1].player) && (grid[i*3 + 1].player == grid[i*3 + 2].player))
        {
            if (grid[i * 3 + 1].player != null)
                {
                    winner = grid[i*3 + 1].player;
                    if (winner != null)
                    {
                        grid[i*3].cellDiv.style.backgroundColor = "pink";
                        grid[i*3 + 1].cellDiv.style.backgroundColor = "pink";
                        grid[i*3 + 2].cellDiv.style.backgroundColor = "pink";
                    } 
                }
        }
    }
        
    
    //columns
    for (var i = 0; i < 3; i ++)
    {
        if ((grid[i].player == grid[i + 3].player) && (grid[i + 3].player == grid[i + 6].player))
        {
                if (grid[i + 3].player != null)
                {
                    winner = grid[i+3].player;
                    grid[i].cellDiv.style.backgroundColor = "pink";
                    grid[i+3].cellDiv.style.backgroundColor = "pink";
                    grid[i+6].cellDiv.style.backgroundColor = "pink";
                }
        }
    }
    
    //Diagonals 
    if ((grid[0].player == grid[4].player) && (grid[4].player == grid[8].player))
    {
        if (grid[4].player != null)
            {
                winner = grid[4].player;
                grid[0].cellDiv.style.backgroundColor = "pink";
                grid[4].cellDiv.style.backgroundColor = "pink";
                grid[8].cellDiv.style.backgroundColor = "pink";
            }
    }
    if ((grid[2].player == grid[4].player) && (grid[4].player == grid[6].player))
    {
        if (grid[4].player != null)
            {
                winner = grid[4].player;
                grid[2].cellDiv.style.backgroundColor = "pink";
                grid[4].cellDiv.style.backgroundColor = "pink";
                grid[6].cellDiv.style.backgroundColor = "pink";
            }
    }
    
   if (winner != null)
       {
           win(winner);
       }
        
}

function win (winner)
{
    for (var i = 0; i < 9; i ++)
    {
        grid[i].cellDiv.onclick = null;
    }
    
    if (winner == 1)
    {
       document.getElementById("infoBox").innerHTML = "Player nought (O) has won!";
    }
    else
    {
       document.getElementById("infoBox").innerHTML = "Player cross (X) has won!"; 
    }
}


class Cell 
{    
    constructor(cellDiv) 
    {
        this.clicked = false;
        this.cellDiv = cellDiv;
        this.cellDiv.className = "cell";
        this.player = null;
        
        
        
    }
  
    
    cellClicked = () =>
    {
        
        var counter;
        if (!this.clicked)
            {
                
                if (turnNumber % 2 == 0)
                    {
                        document.getElementById("infoBox").innerHTML = "It is player cross's (X) turn.";
                        counter = "O";
                        this.player = 1;
                    }
                else{
                        counter = "X";
                        this.player = 2;
                        document.getElementById("infoBox").innerHTML = "It is player noughts's (O) turn.";
                    }
                this.clicked = true;
                this.cellDiv.innerHTML = counter;
                turnNumber++;
                
            if (turnNumber >= 9)
                {
                    document.getElementById("infoBox").innerHTML = "It is a draw";
    
                }
            
            }
        checkBoard();
    } 
            
}











