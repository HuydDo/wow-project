
function getSelectVal(){
  let selectElem = document.getElementById("myGender");
  console.log(selectElem)
  document.getElementById("gender").value = selectElem.options[selectElem.selectedIndex].text;
  // let pElem = document.getElementById('gender')
  // selectElm.addEventListener('change', function() {
  //   let index = selectElem.selectedIndex;
  //   pElem.innerHTML = index
  // })
}

const app = new ApplicationCache()