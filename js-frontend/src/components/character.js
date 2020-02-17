class Character{
  constructor(characterJSON){
    this.id = characterJSON.id
    this.gender = characterJSON.gender
    this.name = characterJSON.name
    this.race = characterJSON.race
    this.character_class = characterJSON.character_class
  }

  renderLi(){
   
    return `<li>${this.gender} ${this.name} ${this.race} ${this.character_class}</li>`
  }

}