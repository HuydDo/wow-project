// import Players from './Players.js';

// class Characters extends Players{
  
  class Characters{
  constructor() {
    this.characters = []
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    this.fetchAndLoadCharacters()
  }


initBindingAndEvenListeners(){
  this.charactersContainer = document.getElementById('characters-container')
  this.playerName = document.getElementById('playerName')
  this.selectGender = document.querySelector('#gender')
  this.selectRace = document.querySelector('#race')
  this.selectClass = document.querySelector('#charClass')
  this.newCharacterBody = document.getElementById('myName')
  this.characterForm = document.getElementById('new-character-form')
  this.characterForm.addEventListener('submit', this.createCharacter.bind(this))
 
  this.createPlayerBody = document.getElementById('new-player-body')

  this.message = document.getElementById('message')
}

createCharacter(e) {
  e.preventDefault()
  
  const player = this.createPlayerBody.value
  const gender = this.selectGender.value
  const race = this.selectRace.value
  const character_class = this.selectClass.value
  const name = this.newCharacterBody.value

  // let result = `Name can't be empty.`
  if (name === ''){
    this.message.innerHTML = this.adapter.nameCheck('Name')
    
  }

  else {
    const charName = this.adapter.titleCase(player)

    // console.log(`Player name: ` + player + ` Player Name after format: ` + charName)

    this.adapter.createCharacter(gender, name, race, character_class, charName)
      .then(character => {
        this.characters.push(new Character(character))
        // this.newCharacterBody.value = ''
        this.render()
debugger
      })
   }
}


fetchAndLoadCharacters() {
  this.adapter.getCharacters()
    .then(characters => {
      characters.forEach(character => this.characters.push(new Character(character)))
    })
    .then(() => {
      // this.render()
    })
}

render() {
  this.charactersContainer.innerHTML = this.characters.map(character =>
    character.renderLi()).join('')
}

filteredPlayer() {
  return this.players.filter(player => {
    return player.name.toLowerCase().includes(this.playerName
      .value.toLowerCase())
  })
}

getPlayerId(name) {
  this.adapter.getPlayerByName(name)
    .then(player => {
      //  players.forEach(player => console.log(`Player: ${player}`))
      return player.id
      // players.forEach(player => this.players.push(new Player(player)))
    })
    // .then(() => {
    // let playerObj =  this.filteredPlayer()
    // console.log(playerObj[0].id)
    // this.playerId =  playerObj[0].id
    // console.log(this.playerId)
    // debugger
    // return player_id
    // })
    .catch(error => {
      return error;
    })
}

}