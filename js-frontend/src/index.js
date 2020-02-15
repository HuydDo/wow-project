
const genders = ["Male","Female"]
const races = ["Human","Orc","Dwarf","Night Elf","Undead","Tauren","Gnome","Troll","Goblin","Blood Elf","Draenei","Worgen","Pandaren","Nightborne","Highmountain Tauren","Void Elf","Lightforged Draenei","Zandalari Troll","Kul Tiran","Dark Iron Dwarf","Vulpera","Mag'har Orc","Mechagnome"]
const classes = ["Warrior","Paladin","Hunter","Rogue","Priest","Death Knight","Shaman","Mage","Warlock","Monk","Druid", "Demon Hunter"]

function renderDropdown(tagId,arr) {
  let div = document.querySelector(tagId),
  frag = document.createDocumentFragment(),
  select = document.createElement("select")

  arr.forEach(e => select.options.add(new Option(e)))
  frag.appendChild(select)
  div.appendChild(frag)
}

renderDropdown("#myGender", genders)
renderDropdown("#myRace", races)
renderDropdown("#myClass", classes)

const app = new App()