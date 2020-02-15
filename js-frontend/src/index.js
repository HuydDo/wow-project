
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
const genders = ["Male","Female"]
const races = ["Human","Orc","Dwarf","Night Elf","Undead","Tauren","Gnome","Troll","Goblin","Blood Elf","Draenei","Worgen","Pandaren","Nightborne","Highmountain Tauren","Void Elf","Lightforged Draenei","Zandalari Troll","Kul Tiran","Dark Iron Dwarf","Vulpera","Mag'har Orc","Mechagnome"]
const character_classes = []



let divGender = document.querySelector("#myGender"),
    fragGender = document.createDocumentFragment(),
    selectGender = document.createElement("select")
    divRace = document.querySelector("#myRace"),
    fragRace = document.createDocumentFragment(),
    selectRace = document.createElement("select");

    genders.forEach(gender => selectGender.options.add(new Option(gender)))
    races.forEach(race => selectRace.options.add(new Option(race)))
  
    // select.options.add(new Option("Male"))
    // select.options.add(new Option("Female"))
    
    fragGender.appendChild(selectGender);
    divGender.appendChild(fragGender);

    fragRace.appendChild(selectRace);
    divRace.appendChild(fragRace);

const app = new App()