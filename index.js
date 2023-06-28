const thour=document.querySelector(".hour")
const tminute=document.querySelector(".minute")
const tsecond=document.querySelector(".second")
const tday=document.querySelector(".day")
 function timer(){
    let enterdate=prompt("enter date").padStart(2,"0");
    while(enterdate>30 || enterdate<0){
        alert("date should be between 0 to 30");
        enterdate=prompt("enter date").padStart(2,"0");
    }
    let entermonth=prompt("enter month").padStart(2,"0");
    while(entermonth>12 || entermonth<0){
        alert("month should be between 0 to 12");
        entermonth=prompt("enter month").padStart(2,"0");

    }
    let enteryear=prompt("enter year").padStart(2,"0");
    let targetdate=`${entermonth}/${enterdate}/${enteryear}`;
    let curr=new Date().getTime();
    let target=new Date(targetdate).getTime();
    if(curr>target){
        alert("set date should be greater than curr date");
    }
    else{
setInterval(() => {
    console.log(thour);
    console.log(tminute);
    console.log(tsecond);
    let second=1000,
    minute=60*second,
    hour=60*minute,
    day=24*hour;
    curr=new Date().getTime();
    let difference=target-curr;
    let leftdays=(Math.floor(difference/day));
    let lefthour=(Math.floor((difference%day)/hour));
    let leftminute=(Math.floor((difference%hour)/minute));
    let leftsecond=(Math.floor((difference%minute)/second));
    tday.innerText=leftdays;
    thour.innerText=lefthour;
    tminute.innerText=leftminute;
    tsecond.innerText=leftsecond;
}, 1000);
    }
 }
 timer();