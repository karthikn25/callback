var div=document.createElement("div");
div.setAttribute("class","container");

var h1=document.createElement("h1");
h1.setAttribute("id","main");
h1.innerHTML="10";


div.append(h1);
document.body.append(div);






setTimeout(function numbers(){
    h1.innerHTML="09"
   
},1000)
setTimeout(function numbers(){
    h1.innerHTML="08"
   
},2000)
setTimeout(function numbers(){
    h1.innerHTML="07"
   
},3000)
setTimeout(function numbers(){
    h1.innerHTML="06"
   
},4000)
setTimeout(function numbers(){
    h1.innerHTML="05"
   
},5000)
setTimeout(function numbers(){
    h1.innerHTML="04"
   
},6000)
setTimeout(function numbers(){
    h1.innerHTML="03"
   
},7000)
setTimeout(function numbers(){
    h1.innerHTML="02"
   
},8000)
setTimeout(function numbers(){
    h1.innerHTML="01"
   
},9000)


setTimeout(function time(numbers){
    h1.innerHTML="HAPPY INDEPENDENTS DAY"
},10000)

