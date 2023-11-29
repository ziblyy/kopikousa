const canvas=document.querySelector(".canvas");
const hh=document.querySelector(".hh");
var flag=0;

function btn(){
    if(flag===0){
        canvas.style.height="13rem";
        canvas.style.opacity="1";
        hh.style.display="none";
        console.log(flag);
        flag=1;
    }
    else{
        canvas.style.height="0rem";
        canvas.style.opacity="0";
        hh.style.display="block";
        console.log(flag);

        flag=0;
    }
   }