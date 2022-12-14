var a= Math.floor(Math.random()*6)+1;
var b=("dice")+a+(".png");
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",b);

var c= Math.floor(Math.random()*6)+1;
var d=("dice")+c+(".png");
var img=document.querySelectorAll("img")[1];
img.setAttribute("src",d);


if(a>c){
    document.querySelector("h1").innerHTML="Player 1 Wins!💥";
}
else if(a<c){
    document.querySelector("h1").innerHTML="Player 2 Wins!💥";
}
else{
    document.querySelector("h1").innerHTML="Draw!🤝";
}



