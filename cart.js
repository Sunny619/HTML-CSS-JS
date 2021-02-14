var noofitem = 6;
var itemcount = [];
for(var i =1; i<=noofitem;i++)
{
  if(localStorage.getItem("itemcount"+i.toString())!=null && localStorage.getItem("itemcount"+i.toString())!=0)
  {
    itemcount[i]=parseInt(localStorage.getItem("itemcount"+i.toString()));
    console.log(itemcount[i],i);
    document.getElementById("item-count-"+i).innerHTML=itemcount[i]; 
  }
  else
  {
    document.getElementById("item-list").children[i-1].className="visually-hidden";
    itemcount[i]=0;
  }
}
function hidepanel(panel)
{
  var itemno=panel.id.charAt((panel.id.length)-1);
  panel.parentElement.parentElement.parentElement.parentElement.parentElement.className="visually-hidden";
}
function incrementcount(add) {
  var itemno=add.id.charAt((add.id.length)-1);
  console.log(itemno);
  itemcount[parseInt(itemno)]+=1;
  localStorage.setItem("itemcount"+itemno, itemcount[parseInt(itemno)])
  add.parentElement.children[1].innerHTML= itemcount[itemno];
}
function subtractcount(sub) {
  var itemno=sub.id.charAt((sub.id.length)-1);
  console.log(itemno);
  itemcount[parseInt(itemno)]-=1;
  localStorage.setItem("itemcount"+itemno, itemcount[parseInt(itemno)])
  sub.parentElement.children[1].innerHTML= itemcount[itemno];
  if(itemcount[itemno]==0)
  {
    hidepanel(sub);
  }
}