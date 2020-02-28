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
    //  this.message = document.getElementById('message')
    //  this.charBtn = document.getElementById('charBtn')
    //  this.playerBtn = document.getElementById('playerBtn')
    //  this.myCharacter = document.getElementById('my-characters')

    //  let playerObj = []
    //  let playerName =  this.newPlayerBody.value
     
    //  if (playerName === ''){
    //    this.message.innerHTML = this.adapter.nameCheck('Player name')
    //  }
    //  else {
       
    //    const formattedPlayerName = this.adapter.titleCase(playerName)
       
    //    this.adapter.getPlayerByName(formattedPlayerName)
    //    .then(player => playerObj.push(new Player(player)))
    //    .then(() => {
       
    //    if (playerObj[0].id !== undefined ){
    //      this.charBtn.style.display = "inline"
    //      this.message.innerHTML = ''
    //      this.render(playerObj)
    //      this.myCharacter.style.display = "table"
         
    //      this.playerBtn.style.display = "none"
    //     }
    //    else {
    //      this.charBtn.style.display = "none"
    //      // this.playersContainer.innerHTML = ''
    //      this.playerBtn.style.display = "inline"
    //      this.newCharacterForm.style.display = "none"
    //      this.myCharacter.style.display ="none"
    //      this.message.innerHTML = this.adapter.nameCheck(playerName, 1)
    //    }
    //   })
     
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

  render(player){    
    this.charactersContainer = document.getElementById('characters-container')
    this.charactersContainer.innerHTML =  player.map(p => p.renderLi())
  }

  filteredPlayer() {
    return this.players.filter(player => {
      return player.name.toLowerCase().includes(this.playerName
        .value.toLowerCase())
    })
  }

  

}