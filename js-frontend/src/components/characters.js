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
    this.createPlayerBody = document.getElementById('new-player-body')
    this.message = document.getElementById('message')
    this.characterForm.addEventListener('submit', this.createCharacter.bind(this))
  }

  createCharacter(e) {
    e.preventDefault()
    
    const player = this.createPlayerBody.value
    const gender = this.selectGender.value
    const race = this.selectRace.value
    const character_class = this.selectClass.value
    const name = this.newCharacterBody.value

    if (name === ''){
      this.message.innerHTML = this.adapter.nameCheck('Name')
    }
    else {
      const charName = this.adapter.titleCase(player)
      this.adapter.createCharacter(gender, name, race, character_class, charName)
        .then(character => {
          this.characters.push(new Character(character))
          // this.newCharacterBody.value = ''
          // this.render()
          this.render(this.characters)
  
        })
     }
     
    }

  fetchAndLoadCharacters() {
    this.adapter.getCharacters()
      .then(characters => {
        characters.forEach(character => this.characters.push(new Character(character)))
      })
      .then(() => {
        this.render()
      })
  }

  render() {
    this.charactersContainer.innerHTML = this.characters.map(character =>
      character.renderLi()).join('')
  }

  // filteredPlayer() {
  //   return this.players.filter(player => {
  //     return player.name.toLowerCase().includes(this.playerName
  //       .value.toLowerCase())
  //   })
  // }

  

}