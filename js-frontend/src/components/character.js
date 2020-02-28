class Character{
  constructor(characterJSON){
    this.id = characterJSON.id
    this.gender = characterJSON.gender
    this.name = characterJSON.name
    this.race = characterJSON.race
    this.character_class = characterJSON.character_class
    this.player_id = characterJSON.player_id
  }

  // renderLi(){
  //   return `<li>${this.gender} ${this.name} ${this.race} ${this.character_class}</li>`
  // }


  renderLi(){
    // let playerCharacters = []
    
    // this.characters.forEach(c => {
      // playerCharacters.push(`<li>Character: ${c.gender} ${c.name} ${c.race} ${c.character_class} </li>`)
      // playerCharacters.push(`<li>${c.name} - Race: ${c.race} Class: ${c.character_class} Gender: ${c.gender} </li>`)
      
      // playerCharacters.push(`<tr><td>${c.name}</td><td>${c.race}</td><td>${c.character_class}</td><td>${c.gender}</td></tr>`)
     return (`<tr data-id=${this.id}><td>${this.name}</td><td>${this.race}</td><td>${this.character_class}</td><td>${this.gender}</td>
     <td><a class="delete-character-link">Delete Char</a></td></tr>`)


    // })
    // playerCharacters.unshift(`<li>Player: ${this.name}</li>`)
    // console.log(playerCharacters)
    // return playerCharacters.join('')
  }

}