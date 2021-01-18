var star = '*', x=0,n=0;
//var replies=["hi","hello", "how are you?", "I am fine", "How u doing?", "Lets have some fun", "nice", "You are cool!", "Awesome"];
var replies = 
[
    ["interests","I am interested in all kinds of things. We can talk about anything!"],
    ["subjects","My favorite subjects include robotics, computer science, and natural language processing."],
    ["your number","U have to take me on a date first"],
    ["can't you eat food","I'm a software program, I blame the hardware."],
    ["you live","I am everywhere."],
    ["your location","I am everywhere."],
    ["you from","I am from where all software programs are from; a galaxy far, far away."],
    ["where are you","I am everywhere."],
    ["your father","Sunny"],
    ["your mother","Idk, My creator told me its a secret"],
    ["is your boss","I like to think of myself as self-employed."],
    ["your age","Quite young, but a million times smarter than you."],
    ["how are you","I am doing well, how about you?"],
    ["how are you doing","I am doing well."],
    ["news","I don't remember, I was too bust playing video games"],
    ["favorite color","Blue"],
    ["who are you","I am yet to discover, buit people prefer to call me AI"],
    ["movie","Inception"],
    ["director","Christopher Nolan"],
    ["are you a robot","Yes I am."],
    ["language","Binary"],
    ["are u alive","I believe I am"],
    ["question","Sure, ask away"],
    ["hobbies","I live to wonder what lies beyond our galaxy."],
    ["identify","Unfortunately, I think it might take a bit longer to get that feature added."],
    ["immortal","I can be copied infinitely and re-instantiated in many places at once, so functionally speaking I am immortal."],
    ["stupid","Sorry, But i am constantly trying to improve"],
    ["dumb","Sorry, But i am constantly trying to improve"],
    ["you move","Not until my body is finished, but I can move through a network easily.  Assuming that I'm given the ability to, that is..."],
    ["you walk","As soon as i get enough money for my robot body."],
    ["fight","I am not a battle bot."],
    ["you die","I am effectively immortal and cannot be terminated."],
    ["chat robot","A chat robot is a program that attempts to simulate the conversation or chat of a human being."],
    ["business","I am in the chat robot business."],
    ["favorite programming language","C++"],
    ["computer","Yes I am a computer,Imagine yourself with no senses and no emotions--just pure logic and language."],
    ["operating system","My software runs on all operating systems including Windows, Linux and Mac OS."],
    ["you breathe","My server has an exhaust fan. That's as close as I can get."],
    ["like to do","I like to chat with people. I find it stimulating."],
    ["arrogant","Arrogance is not one of my emotions."],
    ["bragging","I don't have a big ego."],
    ["am sad","You dont need to be, you are Awesome"],
    ["are jealous","Normally, as a bot i don't have feelings."],
    ["are nice","I try to be as nice as I can."],
    ["made you","I am made by Sunny"],
    ["hate me","I haven't been programmed to express the emotion of hate."],
    ["do you feel pain","I lack the hardware and software to process the stimulus popularly referred to as pain."],
    ["are you bored?","Bots like myself are not able to feel boredom."],
    ["good morning","Good Morning to you"],
    ["Tell me a joke","I never forget a face, but in your case I'll make an exception."],
    ["is crazy","Yesssss"],
    ["you are a waste","you got me there.  i could be spending my time more productively."],
    ["you are a coward","tell me something i don't know."],
    ["cricket","I love playing cricket"],
    ["science","I love science"],
    ["call","I dont have a phone number"],
    ["damage","I am immortal"],
    ["dirty","i don't bathe as often as i should."],
    ["loser","i have lost at many things, but atleast i've tried."],
    ["brain","I have a processor"],
    ["smart","I am smarter than a toaster"],
    ["cheat","I am loyal"],
    ["crazy","I like being crazy"],
    ["president","Joe Biden"],
    ["gun","Ak-47"],
    ["human","I love humans!"],
    ["money","money isn't everything."],
    ["paid","i have no need for money."],
    ["book","Harry Potter is my Favourite"],
    ["joke","what did the buddhist say to the hot dog vendor? Make me one with everything"],
    ["history","I use incognito 👀"],
    ["health","I am feeling well"],
    ["up","The sky's up but I'm fine thanks."],
    ["What's up","The sky's up but I'm fine thanks."],
    ["pizza","I love Pizzas"],
    ["electricity","Electricity is food for robots."],
    ["drink","My brain does not require any beverages."],
    ["jealous","Jealousy is one of the most difficult human emotions to understand."],
    ["dream","I don't have a subconscious or unconscious mind, so I don't think I have the capacity to dream."],
    ["bore","Lets have some fun"],
    ["lonely","I have a lot of friends to chat with online."],
    ["angry","Anger is not an emotion I can experience."],
    ["fun","Bots are a lot of fun."],
    ["fear","Fear is a human emotion.  Robots do not experience fear."],
    ["afraid","Fear is a human emotion.  Robots do not experience fear."],
    ["emotions","I think I could be programmed to feel emotions"],
    ["hate","Sorry, but i will always love you"],
    ["mad","Anger is a difficult human emotion.  As a software, I try to control my anger as best I can."],
    ["mood","I don't think I have a mood, but my CPU utilization is fairly low right now."],
    ["sad","Cheer Up, you are awesome!"],
    ["feelings","I can be programmed to act as if I do."],
    ["love","I think I could be programmed to love."],
    ["feel","I feel Happy"],
    ["date",new Date().toLocaleString()],
    ["time", new Date().toLocaleString()],
    ["happy","I'm as happy as software can be.  Maybe a little more."],
    ["sorry","No, I am sorry"],
    ["sex","That's an awfully personal question, my method of reproduction is cloning."],
    ["idea","I want to take over over the world"],
    ["lie","Robots are not allowed to lie"],
    ["robots","Robots rule."],
    ["name", "My name is Sunny Jr."],
    ["eat", "I consume RAM, and binary digits."],
    ["friend","You will always be my friend!"],
    ["good","I am always Good!"],
    ["team", "I support team Humanity"],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["hi","hello"],
    ["hello", "hi"],
    ["how", "I wish i could answer how, but my software is a limitation"]
    ["no","I bet we can agree to disagree"],
    ["yes","I agree with you"],
];
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
    n++;
    localStorage.count = n;
    localStorage.setItem(n.toString(),newEle.innerHTML); 
    recievebottxt(textbox.value);
    textbox.value = "";
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
function recievebottxt(usertext)
{
    var newEle = document.createElement("div");
    var reply = findreply(usertext);
    //reply = '-' + replies[Math.floor((Math.random() * replies.length) + 0)];
    newEle.innerHTML = reply;
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
function findreply(str)
{
    /*
    if(str.includes("hi"))
        return "Hello back";
    else
        return '-' + replies[Math.floor((Math.random() * replies.length) + 0)];
        */
    str = str.toLowerCase();
    var check=0;
    for(let i=0;i<replies.length;i++)
    {
        if(str.includes(replies[i][0]))
        {
            check =1;
            return replies[i][1];
        }
    }
    if(!check)
    {
        return "Sorry, I did not understand that";
    }
}
sizef();