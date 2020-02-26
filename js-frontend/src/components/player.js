class Player{
  constructor(playerJSON){
    this.id = playerJSON.id
    this.name = playerJSON.name
    this.characters = playerJSON.characters
  }

  renderLi(){
    let playerCharacters = []
    
    this.characters.forEach(c => {
      // playerCharacters.push(`<li>Character: ${c.gender} ${c.name} ${c.race} ${c.character_class} </li>`)
      // playerCharacters.push(`<li>${c.name} - Race: ${c.race} Class: ${c.character_class} Gender: ${c.gender} </li>`)

      
      // return `<li data-id=${this.id}>${this.body}<a class="delete-note-link">Delete</a></li>`
      
      // playerCharacters.push(`<tr><td>${c.name}</td><td>${c.race}</td><td>${c.character_class}</td><td>${c.gender}</td></tr>`)
      console.log(c[0].id)
      playerCharacters.push(`<tr data-id=${this.characters[0].id}><td>${c.name}</td><td>${c.race}</td><td>${c.character_class}</td><td>${c.gender}</td>
     <td><a class="delete-character-link">Delete</a></td></tr>`)


    })
    // playerCharacters.unshift(`<li>Player: ${this.name}</li>`)
    console.log(playerCharacters.join(''))
    return playerCharacters.join('')
  }

}