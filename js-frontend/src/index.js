
const genders = ["Male","Female"]
const races = ["Human","Orc","Dwarf","Night Elf","Undead","Tauren","Gnome","Troll","Goblin","Blood Elf","Draenei","Worgen","Pandaren","Nightborne","Highmountain Tauren","Void Elf","Lightforged Draenei","Zandalari Troll","Kul Tiran","Dark Iron Dwarf","Vulpera","Mag'har Orc","Mechagnome"]
const classes = ["Warrior","Paladin","Hunter","Rogue","Priest","Death Knight","Shaman","Mage","Warlock","Monk","Druid", "Demon Hunter"]

function renderDropdown(tagId, arr, dropdownId) {
  let div = document.querySelector(tagId),
  frag = document.createDocumentFragment(),
  select = document.createElement("select")
  select.id = dropdownId
  
  arr.forEach(e => select.options.add(new Option(e)))
  frag.appendChild(select)
  div.appendChild(frag)
}

renderDropdown("#myGender", genders, "gender")
renderDropdown("#myRace", races, "race")
renderDropdown("#myClass", classes, "charClass")


function asd(a)
{
    if(a==1)
        document.getElementById("new-character-form").style.display="none";
    else
        document.getElementById("new-character-form").style.display="block";
}
const app = new App()