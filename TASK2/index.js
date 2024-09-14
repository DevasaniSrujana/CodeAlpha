let str="";
const boxes=document.getElementsByClassName("box");
const inputBox=document.querySelector(".compute");
const equal=document.querySelector(".equal");
const clear=document.querySelector(".clear");
const remove=document.querySelector(".remove");
Array.from(boxes).forEach((ele)=>{
    ele.addEventListener("click",()=>{
        str=str+ele.innerHTML;
        inputBox.value=str;
    });
});
equal.addEventListener("click",()=>{
    str=eval(str)||""; 
    inputBox.value=str;
});
clear.addEventListener("click",()=>{
    str="";
    inputBox.value=str;
});
remove.addEventListener("click",()=>{
    str=str.slice(0, -1); 
    inputBox.value=str;
});
