let btnSeq = [];
let userSeq = [];
let btns = ["yellow","red","blue","green"];
let started = false;
let level = 0;
let highScore = 0;
let startBtn = document.querySelector('#start');
let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
    // console.log("gamestarted");
    if(started == false)
    {
        started = true;
        levelUp();
    }
})
startBtn.addEventListener("click",function()
{
    if(started == false)
    {
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")},250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")},250);
}
function levelUp()
{
    userSeq = [];
    level++;
    highScore = Math.max(level,highScore);
    h2.innerText = `Your At Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameFlash(randbtn);
    btnSeq.push(randcolor);
    console.log(btnSeq);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

function checkAns(idx)
{
    if(userSeq[idx] === btnSeq[idx])
    {
        if(userSeq.length == btnSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        h2.innerHTML = `<h2><h2 style = "color:red">Game Over!! Your Score is ${level}.</h2> Press any key to start again.</h2>
        <h2 style = "color:green">Your highest score is ${highScore}.</h2>`;
        let body = document.querySelector('body');
        bodyFlash(body);
        reset();
    }
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started = false;
    btnSeq = [];
    userSeq = [];
    level = 0;
}

function bodyFlash(body)
{
    body.classList.add("bodyflash");
    setTimeout(function(){
        body.classList.remove("bodyflash")},150)
}
