class Players{
  constructor() {
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
  }
  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
    this.newPlayerBody = document.getElementById('new-player-body')
    this.loginPlayerForm = document.getElementById('login-player-form')
    this.createPlayerBody = document.getElementById('create-player-body')
    this.createPlayerForm = document.getElementById('create-player-form')
    this.message = document.getElementById('message')
    this.charBtn = document.getElementById('charBtn')
    this.playerBtn = document.getElementById('playerBtn')
    this.newCharacterForm = document.getElementById('new-character-form')
    this.myCharacter = document.getElementById('my-characters')

   this.createPlayerForm.style.display = "none"
    // this.charBtn.style.display = "none"

   this.createPlayerForm.addEventListener('submit', this.createPlayer.bind(this))
    // this.loginPlayerForm.addEventListener('submit', this.showPlayerCharacters.bind(this))
  
  }

  createPlayer(e) {
    e.preventDefault()
    
    let newPlayer = this.createPlayerBody.value
    //check if new player name is empty
    if (newPlayer === ''){
     this.message.innerHTML = this.adapter.nameCheck('New player name')
     this.newCharacterForm.style.display = "none"
     this.myCharacter.style.display ="none"
    }
    else {
      const charName = this.adapter.titleCase(newPlayer)
      this.adapter.createPlayer(charName).then(player => {
      this.players.push(new Player(player))
      this.createPlayerForm.style.display = "none"
      this.message.innerHTML = ''
      // this.message.innerHTML = this.adapter.nameCheck('Player was created successfully.', 2)

      // this.createPlayerBody.value = ''
      // this.render(this.players)
      })
    }
  }

  showPlayerCharacters(e){
    e.preventDefault()
    let playerObj = []
    let playerName =  this.newPlayerBody.value
    let playerId 
    
    if (playerName === ''){
      this.message.innerHTML = this.adapter.nameCheck('Player name')
    }
    else {
      
      const formattedPlayerName = this.adapter.titleCase(playerName)
      
      this.adapter.getPlayerByName(formattedPlayerName)
      .then(player => {
        playerObj.push(new Player(player))
        playerId = player.id
        console.log(`currentUser ${player.name} set with id: ${player.id}`)
      })
      .then(() => {
      
      // if (playerObj[0].id !== undefined ){
      if (playerId !== undefined ){  
        this.charBtn.style.display = "inline"
        this.message.innerHTML = ''
        this.render(playerObj)
        this.myCharacter.style.display = "table"
        
        this.playerBtn.style.display = "none"
       }
      else {
        this.charBtn.style.display = "none"
        // this.playersContainer.innerHTML = ''
        this.playerBtn.style.display = "inline"
        this.newCharacterForm.style.display = "none"
        this.myCharacter.style.display ="none"
        this.message.innerHTML = this.adapter.nameCheck(playerName, 1)
      }
     })
    } 
  }

  // exactMatch() {
  //   return this.players.find(  
  //     player => player.name.toLowerCase() === this.newPlayerBody.value.toLowerCase()
  //   )
  // }

  render(player){    
    this.charactersContainer = document.getElementById('characters-container')
    this.charactersContainer.innerHTML =  player.map(p => p.renderLi())
  }

  
}