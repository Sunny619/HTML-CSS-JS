function changepic()
{
    var checkbox = document.getElementById("btncheck1");
    var switchimg = document.getElementById("switchimg");
    if(checkbox.checked)
      switchimg.src = "Images/Cat card 2b.jpg";
    else
      switchimg.src = "Images/Cat card 2a.jpg";
}                 
