class Player{
  constructor(playerJSON){
    this.id = playerJSON.id
    this.name = playerJSON.name
    this.characters = playerJSON.characters
  }

  renderLi(){
    console.log(this.characters)
    this.characters.forEach()
    return `<li>${this.name} ${this.character.name}</li>`
  }

}