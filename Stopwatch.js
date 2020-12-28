var min=document.getElementById("min");
var sec=document.getElementById("sec");
var msec=document.getElementById("msec");
var startbtn=document.getElementById("btn");
var pausebtn=document.getElementById("btn1");
var resetbtn=document.getElementById("btn2");
var stopbtn=document.getElementById("btn3");

var timer ;


startbtn.addEventListener("click",function(){
    if(!timer){
        timer=setInterval(counter,1);
    }
});

pausebtn.addEventListener("click",function(){
    clearInterval(timer);
    timer=false;
});

stopbtn.addEventListener("click",function(){
    clearInterval(timer);
    timer=false;
    msec.innerHTML='00';
    sec.innerHTML='00';
    min.innerHTML='00';
});

resetbtn.addEventListener("click",function(){
    msec.innerHTML='00';
    sec.innerHTML='00';
    min.innerHTML='00';
});

function counter(){
    msec.innerHTML ++;
    if(msec.innerHTML==100){
        msec.innerHTML=00;
        sec.innerHTML++;
        if(sec.innerHTML<10){
            sec.innerHTML= "0" + sec.innerHTML;
        }
        else{
            sec.innerHTML=sec.innerHTML;
        }
        if(sec.innerHTML==60){
            sec.innerHTML=00;
            min.innerHTML++;
            if(min.innerHTML<10){
                min.innerHTML= "0" + min.innerHTML;
            }
            else{
                min.innerHTML=min.innerHTML;
            }
        }
    }
    if(msec.innerHTML<10){
        msec.innerHTML= "0" + msec.innerHTML;
    }
    else{
        msec.innerHTML=msec.innerHTML;
    }
};