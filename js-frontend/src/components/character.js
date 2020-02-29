class Character{
  constructor(characterJSON){
    this.id = characterJSON.id
    this.gender = characterJSON.gender
    this.name = characterJSON.name
    this.race = characterJSON.race
    this.character_class = characterJSON.character_class
    this.player_id = characterJSON.player_id
  }

  renderLi(){
     return (`<tr data-id=${this.id}><td>${this.name}</td><td>${this.race}</td><td>${this.character_class}</td><td>${this.gender}</td>
     <td><a class="delete-character-link">Delete</a></td></tr>`)
  }

}