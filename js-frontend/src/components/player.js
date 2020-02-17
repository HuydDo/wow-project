class Player{
  constructor(playerJSON){
    this.id = playerJSON.id
    this.name = playerJSON.name
    this.characters = playerJSON.characters
  }

  renderLi(){
    let playerCharacters = []
    
    this.characters.forEach(c => {
      playerCharacters.push(`<li>Character: ${c.gender} ${c.name} ${c.race} ${c.character_class} </li>`)
    })
    
    playerCharacters.unshift(`<li>Player: ${this.name}</li>`)
    return playerCharacters.join('')
  }


}