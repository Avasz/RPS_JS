var cpu=0;
var human=0;
var t=0;
var w=0;
var l=0;
var d=0;
function change(img,par,caller)
{
  t=t+1;
  document.getElementById(par).style.backgroundImage='url('+img+')';
      if(img=="../img/stone.jpg")
      {
        human=1;
      }
      else if(img=="../img/paper.jpg")
      {
        human=2;
      }
      else if(img=="../img/scissors.jpg")
      {
        human=3;
      }
      else{
        alert('error');
      }
      acpu();
      tot.innerHTML=t;
 
      }
function acpu()
{
  var rand=(new Date().getTime() % 3);
  if(rand==0)
  {
    c_weapon.style.backgroundImage='url(../img/stone.jpg)';
    cpu=1;
  }
  else if(rand==1)
  {
    c_weapon.style.backgroundImage='url(../img/paper.jpg)';
    cpu=2;
  }
  else if(rand==2)
  {
    c_weapon.style.backgroundImage='url(../img/scissors.jpg)';
    cpu=3;
  }
  else
  {
    alert("Error");
  }
  comp();
}
function comp()
{
  if((cpu==1 && human==1) || (cpu==2 && human==2) || (cpu==3 && human==3))
  {
    msg.innerHTML="IT's A DRAW!!! :|"
    d=d+1;
    draw.innerHTML=d;
  }
  else if((cpu==1 && human==3) || (cpu==2 && human==1) || (cpu==3 && human==2))
  {
    msg.innerHTML="YOU LOST!!! :(";
    l=l+1;
    lost.innerHTML=l;
  }
  else
  {
    msg.innerHTML="YOU WON!!!! :)"
    w=w+1;
    won.innerHTML=w;
  }
}

function reset()
{
  msg.innerHTML="RESULT";
  won.innerHTML=0;
  draw.innerHTML=0;
  lost.innerHTML=0;
  tot.innerHTML=0;
  h_weapon.style.background='white';
  c_weapon.style.background='white';
  cpu=0;
 human=0;
 t=0;
 w=0;
 l=0;
d=0;
}
