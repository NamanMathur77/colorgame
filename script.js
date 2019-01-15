//different elements
var numberOfSquares=6;
var colors=generateRandomColors(numberOfSquares);
var pickedColor=pickcolor();
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#color");
var messageDisplay=document.getElementById("message");
var head=document.getElementsByTagName("h1")[0];
var resetbtn=document.getElementById("reset");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");
var heart=document.getElementsByClassName("fa")[0];

heart.addEventListener("mouseover",function(){
  this.classList.add("addshadow");
});
heart.addEventListener("mouseout",function(){
  this.classList.remove("addshadow");
});

//mode selection
easybtn.addEventListener("click",function(){
  //change the color on selecting
  easybtn.classList.add("selected");
  //remove the color from hard
  hardbtn.classList.remove("selected");
  //initialise the number of squares to contain
  numberOfSquares=3
  //generate the colors
  colors=generateRandomColors(numberOfSquares);
  //pick the correct color
  pickedColor=pickcolor();
  //display the rgb of the correct color
  colorDisplay.textContent=pickedColor;
  //set color of each square
  for(i=0;i<squares.length;i++){
    //till 3 squares as colors generated are only 3
    if(colors[i]){
      squares[i].style.backgroundColor=colors[i];
    }
    //colors are not generated for these so they are invisible
    else{
      squares[i].style.display="none";
    }
  }
});
//mode selection
hardbtn.addEventListener("click",function(){
  //remove the selection from easy button
  easybtn.classList.remove("selected");
  //add selection class to the hard button
  hardbtn.classList.add("selected");
  //initialise the number of squares
  numberOfSquares=6
  //generate the colors
  colors=generateRandomColors(numberOfSquares);
  //pick the correct color from the generated colors
  pickedColor=pickcolor();
  //display the rgb of the correct color
  colorDisplay.textContent=pickedColor;
  //set colors of each square
  for(i=0;i<squares.length;i++){
      squares[i].style.backgroundColor=colors[i];
      squares[i].style.display="block";
  }
});
//initialise the reset button
resetbtn.addEventListener("click",function(){
  //on click it should generate the number of colors specified in numberOfSquares
  colors=generateRandomColors(numberOfSquares);
  //pick a color out of colors as correct
  pickedColor=pickcolor();
  //as display message as none
  messageDisplay.textContent=" ";
  //reset reset button to new color
  resetbtn.textContent="New Color"
  //set rgb color to the pickedColor
  colorDisplay.textContent=pickedColor;
  //set color of all the squares
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
  }
  head.style.backgroundColor="steelblue";
});
colorDisplay.textContent=pickedColor;
//check whether the selected color is correct
for(var i=0;i<squares.length;i++){
  squares[i].style.backgroundColor=colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor=this.style.backgroundColor;
    if(clickedColor==pickedColor){
      messageDisplay.textContent="correct";
      resetbtn.textContent="Play Again?";
      head.style.backgroundColor=pickedColor;
      for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=clickedColor;
      }
    }
    else{
      this.style.backgroundColor="#232323"
      messageDisplay.textContent="Try Again";
    }
  });
}
function pickcolor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}
function generateRandomColors(num){
  var arr=[];
  for(var i=0;i<num;i++){
    arr.push(randomColor());

  }
  return arr;

}
function randomColor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+ r +", "+ g +", "+ b +")";
}
