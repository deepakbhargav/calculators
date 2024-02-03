let currentValue="";
let text=document.querySelector("#text");
text.value=currentValue;
function calcufun(value) {
  if(value=="=") {
   let result= eval(currentValue);
   text.value=result;
   currentValue=result;
   return;
  }
  currentValue+=value;
  text.value=currentValue;
  if(value=='c') {
    currentValue="";
    text.value=currentValue;
  }
 
}