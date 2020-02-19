
class Characters{
  constructor() {
    this.playerId 
    this.characters = []
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    this.fetchAndLoadCharacters()
  }

  initBindingAndEvenListeners(){
    this.charactersContainer = document.getElementById('characters-container')
    this.newCharacterBody = document.getElementById('new-character-body')
    
    this.selectGender = document.querySelector('#gender')
    this.selectRace = document.querySelector('#race')
    this.selectClass = document.querySelector('#charClass')
    //create new character
    this.characterForm = document.getElementById('new-character-form')
    this.characterForm.addEventListener('submit', this.createCharacter.bind(this))

    this.playerName = document.getElementById('new-player-body')

  }

  createCharacter(e) {
    // console.log(this)
    e.preventDefault()
    
    const gender = this.selectGender.value
    const name = this.newCharacterBody.value
    const race = this.selectRace.value
    const character_class = this.selectClass.value
    
    // console.log(this.playerName.value)
    this.getPlayerId(this.playerName.value)

    


    // const id = this.playerId
    // console.log(`playerId: ${id}`)
    
    this.adapter.createCharacter(gender, name, race, character_class).then(character => {
      
      this.characters.push(new Character(character))
      this.newCharacterBody.value = ''
      // this.render()
      
    })
  }

  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    .then(characters => {
      characters.forEach(character => this.characters.push(new Character(character)))
    })
    .then(() => {
      // this.render()
    })

  }

  render(){
    this.charactersContainer.innerHTML =  this.characters.map(character => 
      character.renderLi()).join('')
  }


  getPlayerId(name){
    // let player_id = 0
    // this.players = []
    const pName = this.adapter.getPlayerByName(name)
    console.log(`player name ${pName}`
    )

    this.adapter.getPlayerByName(name)
    .then(players => {
         players.forEach(player => console.log(`Player: ${player}`))
         
        // players.forEach(player => this.players.push(new Player(player)))
    })
    .then(() => {
    let playerObj =  this.filteredPlayer()
    console.log(playerObj[0].id)
    this.playerId =  playerObj[0].id
    console.log(this.playerId)
    // debugger
    // return player_id
    })

    .catch(error => {
      return error;
    })
  }

  filteredPlayer() {
    return this.players.filter(player =>  {   
      return player.name.toLowerCase().includes(this.playerName
        .value.toLowerCase())
    })
  }

}