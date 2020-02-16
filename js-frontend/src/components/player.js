class Player{
  constructor(playerJSON){
    this.player_characters = []
    this.id = playerJSON.id
    this.name = playerJSON.name
    this.characters = playerJSON.characters
  }

  renderLi(){
    this.characters.forEach(c => {
      this.player_characters.push(`<li>Character: ${c.gender}, ${c.name}, ${c.race}, ${c.character_class} </li>`)
    })
    // console.log(this.player_characters)
    return `<li>Player: ${this.name}  ${this.player_characters}</li>`
  }

}