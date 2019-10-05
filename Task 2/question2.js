function createBoxes ()
{
    var div = document.getElementById("boxesDiv").innerHTML = null;
    
    var num = document.getElementById("boxesNum").value;
    

    
    for (var i = 0; i < num; i++)
        {   
            var red = Math.round(Math.random()*255);
            var green = Math.round(Math.random()*255);
            var blue = Math.round(Math.random()*255);
            
            var margin = Math.pow(2,i) * 5
            
            var div = document.getElementById("boxesDiv");
            div.innerHTML += "<div class = 'box'; style = 'background-color:rgb(" +red+ ","+ green + "," + blue + "); margin-left:  " + margin + "px'> </div>";
            
           
        
        }
    
    


}