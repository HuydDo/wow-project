class Player{
  constructor(playerJSON){
    this.id = playerJSON.id
    this.name = playerJSON.name
    this.characters = playerJSON.characters
  }

  renderLi(){
    let playerCharacters = []
    
    this.characters.forEach(c => {
      playerCharacters.push(`<tr data-id=${this.characters[0].id}><td>${c.name}</td><td>${c.race}</td><td>${c.character_class}</td><td>${c.gender}</td>
     <td><a class="delete-character-link">Delete It</a></td></tr>`)
    })
    return playerCharacters.join('')
  }

}