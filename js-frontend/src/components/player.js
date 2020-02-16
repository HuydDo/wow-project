class Player{
  constructor(playerJSON){
    this.id = playerJSON.id
    this.name = playerJSON.name
    this.characters = playerJSON.characters
  }

  renderLi(i=0){
    let playerCharacters = []
    this.characters.forEach(c => {
      playerCharacters.push(`<li>Character: ${c.gender}, ${c.name}, ${c.race}, ${c.character_class} </li>`)
    })
    // console.log(this.player_characters)
    return `Player: ${this.name} ${playerCharacters}`
  }

  renderDropdown(tagId,arr) {
    let div = document.querySelector(tagId),
    frag = document.createDocumentFragment(),
    // select = document.createElement("select")
    select = document.createElement("select", {"id":"playerName"})
    // select.setAttribute("id", "playerName")
    // select.id = "playerName"
    // debugger
    // console.log(select.id)
    arr.forEach(e => select.options.add(new Option(e)))
    frag.appendChild(select)
    div.appendChild(frag)
  }

}