var star = '*', x=0,n=0;
var replies=["hi","hello", "how are you?", "I am fine", "How u doing?", "Lets have some fun", "nice", "You are cool!", "Awesome"];
if(localStorage.count!=null)
    n = localStorage.count;
var text1 = document.getElementById("text1");
var home = document.getElementById("home");
var send = document.getElementById("button1");
var clear = document.getElementById("button2");
var hello = document.getElementById("hello");
var texts = document.getElementById("texts");
var textbox = document.getElementById("textbox");
var textwindow = document.getElementById("center2");

//textwindow.style.height = window.innerHeight-200+"px";
//texts.style.maxWidth=window.innerWidth*4/5+"px";
text1.innerHTML =  "Touch Count = "+x;
home.style.color = "gold";

function sizef()
{
    textwindow.style.height = window.innerHeight-200+"px";
    //texts.style.maxWidth=window.innerWidth*4/5+"px";
    var sends = document.getElementsByClassName('send');
    var recieves = document.getElementsByClassName('recieve');
    for (let i = 0; i < sends.length; i++) {
        sends[i].style.maxWidth=window.innerWidth*4/5+"px";
        recieves[i].style.maxWidth=window.innerWidth*4/5+"px";
    }
}
send.addEventListener("mouseover", function(){
    this.style.color= "blue";
});
send.addEventListener("mouseout", function(){
    this.style.color= "black";
});
send.addEventListener("click",sendtxt);
//recieve.addEventListener("click",recievetxt);
addEventListener("keypress",function(e){
    if(e.key === 'Enter')
        sendtxt();
});
clear.addEventListener("click", function(){
    localStorage.clear()
    var totalchild =texts.childElementCount;
    for(var i=1; i<=totalchild; i++)
    {
        texts.removeChild(texts.lastChild);
    }
    n=0;
});
hello.addEventListener("mouseover", function(){
    this.style.color= "blue";
    x++;
    text1.innerHTML =  "Touch Count = "+x;
    console.log(x);
});
hello.addEventListener("mouseout", function(){
    this.style.color= "chartreuse";
});
function sendtxt()
{
    var newEle = document.createElement("div");
    newEle.className = "send";
    newEle.innerHTML = textbox.value;
    texts.appendChild(newEle);
    textbox.value = "";
    n++;
    localStorage.count = n;
    localStorage.setItem(n.toString(),newEle.innerHTML); 
    recievebottxt();
    texts.scrollTo({
        top: texts.scrollTop+100000,
        behavior: 'smooth'
      });
}
/*function recievetxt()
{
    var newEle = document.createElement("div");
    newEle.innerHTML ='-' + textbox.value;
    newEle.id = "recieve";
    texts.appendChild(newEle);
    textbox.value = "";
    localStorage.setItem(n.toString()+'r',newEle.innerHTML);
}*/
function recievebottxt()
{
    var newEle = document.createElement("div");
    newEle.innerHTML ='-' + replies[Math.floor((Math.random() * replies.length) + 0)];
    newEle.className = "recieve";
    texts.appendChild(newEle);
    localStorage.setItem(n.toString()+'r',newEle.innerHTML);
}

for(var i=1; i<=n; i++)
{
    var newEle = document.createElement("div");
    newEle.className = "send";
    newEle.innerHTML = localStorage.getItem(i);
    texts.appendChild(newEle);
    if(localStorage.getItem(i+'r')!=null)
    {
        var newEle = document.createElement("div");
        newEle.className = "recieve";
        newEle.innerHTML = localStorage.getItem(i+'r');
        texts.appendChild(newEle);
    }
}
sizef();