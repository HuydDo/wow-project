function gender(){
  let mygender = document.getElementById("myGender");
  document.getElementById("gender").value = mygender.options[mygender.selectedIndex].text;
}