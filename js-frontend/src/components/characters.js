class Characters{
  constructor() {
    this.characters = []
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

    const id = this.getPlayerId()
    // console.log(`playerId: ${playerName}`)
    // debugger

    // console.log(`class: ${character_class}`)
    this.adapter.createCharacter(gender, name, race, character_class, id).then(character => {
      // console.log(character)
      
      this.characters.push(new Character(character))
      this.newCharacterBody.value = ''
      // this.render()

      
    })
  }

  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    .then(characters => {
      characters.forEach(character => this.characters.push(new Character(character)))
      // console.log(this.characters)
    })
    .then(() => {
      this.render()
      // console.log(`name: ${this.newCharacterBody.value}, gender: ${this.selectGender.value}
      // race: ${this.selectRace.value}, class: ${this.selectClass.value}`)

    })
  }

  render(){
    this.charactersContainer.innerHTML =  this.characters.map(character => 
      character.renderLi()).join('')
  }


  getPlayerId(){
    this.players = []
    // e.preventDefault()
    // const value = this.newPlayerBody.value
    
    this.adapter.getPlayers()
    .then(players => {
        players.forEach(player => this.players.push(new Player(player)))
    })
    .then(() => {
    let filteredPlayer =  this.filteredPlayer()
    // let filteredPlayer =  this.exactMatch()

    console.log(filteredPlayer[0].id)
    debugger

    // this.newPlayerBody.value =''  
    // this.render(filteredPlayer)
    //   this.renderPlayerNames()
    })
  }

  filteredPlayer() {
    return this.players.filter(player =>  {   
      // console.log(`player_id: ${player.id}`)
      return player.name.toLowerCase().includes(this.playerName
        .value.toLowerCase())
    } );
  }



}