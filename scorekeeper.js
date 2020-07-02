var p1=document.querySelector("button");
var s1=document.querySelector("#pl1");
var p1Score=0;
var p2=document.querySelector("#player2");
var s2=document.querySelector("#pl2");
var p2Score=0;
var gameOver=false;
var winningScore=5;
var maxScore=document.querySelector("#maxscore");
var winn=document.querySelector("#winnscore");
var reset=document.querySelector("#rst");
p1.addEventListener("click",function(){
	if(p1Score==winningScore)
	{
        gameOver=true;
        s1.classList.add("winner");
	}
	if(!gameOver)
	{
	p1Score++;
	s1.textContent=p1Score;
}

});
p2.addEventListener("click",function(){
	if(p2Score==winningScore)
	{
        gameOver=true;
        s2.classList.add("winner");
	}
	if(!gameOver)
	{
	p2Score++;
	s2.textContent=p2Score;
}
});
winn.addEventListener("change",function(){
	maxScore.textContent=this.value;
	winningScore=this.value;
	Reset();
});
function Reset()
{
	p1Score=0;
	p2Score=0;
	gameOver=false;
	s1.classList.remove("winner");
	s2.classList.remove("winner");
}
reset.addEventListener("click",function(){
	Reset();
	s1.textContent=0;
	s2.textContent=0;
});

