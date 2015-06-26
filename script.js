var colorMode = false;
$(document).ready(function(){
    makeGrid(16);
   $(document).on('mouseenter','td', function(){
      if(colorMode){
         if($(this).hasClass("activated")){
            $(this).css("background-color", darkenColor($(this).css("background-color")));
         }
         else{
            $(this).css("background-color", randomColor());
            $(this).addClass("activated");
         }
      }else{
         $(this).css("background-color", "#777");
      }
   });
    $('#normalButton').click(function(){
        colorMode = false;
        makeGrid(prompt("Enter Size (Max: 128):"));
    });
    $('#colorButton').click(function(){
        colorMode = true;
        makeGrid(prompt("Enter Size (Max: 128):"));
    });
    randomColor();
});

function makeGrid(gridSize){
    $('td,tr').remove();
    for(var j=1; j<=gridSize; j++){
        $('tbody').append('<tr>');
        for(var i=1; i<=gridSize; i++){
            $('tbody').append('<td></td>');
        }
        $('tbody').append('</tr>');
    }
}

function randomColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

function darkenColor(orig) {
    var rgb = orig.replace(/[^\d,]/g, '').split(',');
    var r = Math.floor(parseInt(rgb[0])-25.5);
    var g = Math.floor(parseInt(rgb[1])-25.5);
    var b = Math.floor(parseInt(rgb[2])-25.5);
    if(r<0){r=0}
    if(g<0){g=0}
    if(b<0){b=0}
    var value = "rgb(" + r + "," + g + "," + b + ")";
    return value;
}