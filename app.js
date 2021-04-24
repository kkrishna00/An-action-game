score=0;
cross=true;
audio = new Audio('MATERIALS/music.mp3');
audiogo = new Audio('MATERIALS/gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown=function(e){
    console.log("key code is", e.keyCode)
    if(e.keyCode==38)
    {
        dino=document.querySelector(".dino");
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);
    }
    if(e.keyCode==39)
    {
        dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX + 112 + "px";
    }
    if(e.keyCode==37)
    {
        dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    if(offsetx<113&&offsety<52)
    {
        gameOver.innerHTML="Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetx<145 && cross)
    {
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur - 0.1;
            obstacle.style.animationDuration = newDur +'s';
        }, 500);
        
    }
}, 10);

function updatescore(score)
{
    scorecont.innerHTML="Your Score: " + score;
}