var shopele = document.getElementById("shop");
var cartmenu = document.getElementById("cart-menu");
var noofitem = 7;
var itemcount = [];
for(var i =0; i<=noofitem;i++)
{
  if(localStorage.getItem("itemcount"+i.toString())!=null && localStorage.getItem("itemcount"+i.toString())!=0)
  {
    itemcount[i]=parseInt(localStorage.getItem("itemcount"+i.toString()));
    console.log(itemcount[i],i);
    document.getElementById("item-count-"+i).innerHTML=itemcount[i]; 
    cartmenu.children[i-1].children[0].children[2].innerHTML = itemcount[i];
    showpanel(document.getElementById("item-count-"+i)) 
    //add.className = "visually-hidden";
    //add.parentElement.children[1].className = "";
  }
  else
  {
    itemcount[i]=0;
  }
}
function resizep()
{
  if(window.innerWidth>2000)
    shopele.className = "row row-cols-1 row-cols-md-6 g-4 m-1";
  else if(window.innerWidth>1600)
    shopele.className = "row row-cols-1 row-cols-md-5 g-4 m-1";
  else if(window.innerWidth>1280)
    shopele.className = "row row-cols-1 row-cols-md-4 g-3 m-1";
  else if(window.innerWidth>800)
    shopele.className = "row row-cols-1 row-cols-md-3 g-3 m-1";
  else
    shopele.className = "row row-cols-1 row-cols-md-2 g-2 m-1";
}
resizep();

function additem(add)
{
    var itemno=add.id.charAt((add.id.length)-1);
    //console.log(add.parentElement.children[1].children[0].children[2]);0
    cartmenu.children[itemno-1].className = "";
    add.className = "visually-hidden";
    add.parentElement.children[1].className = "";
    incrementcount(add.parentElement.children[1].children[0].children[2]);
}
function showpanel(panel)
{
  var itemno=panel.id.charAt((panel.id.length)-1);
  cartmenu.children[itemno-1].className = "";
  panel.parentElement.parentElement.className = "";
  panel.parentElement.parentElement.parentElement.children[0].className = "visually-hidden";
}
function hidepanel(panel)
{
  var itemno=panel.id.charAt((panel.id.length)-1);
  cartmenu.children[itemno-1].className = "visually-hidden";
  panel.parentElement.parentElement.className = "visually-hidden";
  panel.parentElement.parentElement.parentElement.children[0].className = "";
}
function incrementcount(add) {
  var itemno=add.id.charAt((add.id.length)-1);
  console.log(itemno);
  itemcount[parseInt(itemno)]+=1;
  localStorage.setItem("itemcount"+itemno, itemcount[parseInt(itemno)])
  add.parentElement.children[1].innerHTML= itemcount[itemno];
  cartmenu.children[itemno-1].children[0].children[2].innerHTML = itemcount[itemno];
}
function subtractcount(sub) {
  var itemno=sub.id.charAt((sub.id.length)-1);
  console.log(itemno);
  itemcount[parseInt(itemno)]-=1;
  localStorage.setItem("itemcount"+itemno, itemcount[parseInt(itemno)])
  sub.parentElement.children[1].innerHTML= itemcount[itemno];
  cartmenu.children[itemno-1].children[0].children[2].innerHTML = itemcount[itemno];
  if(itemcount[itemno]==0)
  {
    hidepanel(sub);
  }
}