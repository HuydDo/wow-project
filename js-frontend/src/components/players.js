class Players{
  constructor() {
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
  }
  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
    this.newPlayerBody = document.getElementById('new-player-body')
    this.characterForm = document.getElementById('new-player-form')
    this.createPlayerBody = document.getElementById('create-player-body')
    this.playerForm = document.getElementById('create-player-form')
    this.message = document.getElementById('message')
    this.charBtn = document.getElementById('charBtn')
    this.newCharacterForm = document.getElementById('new-character-form')
    this.myCharacter = document.getElementById('my-characters')

    this.newCharacterForm.style.display="none"
    this.playerForm.style.display = "none"
    this.myCharacter.style.display ="none"
    this.charBtn.style.display = "none"

    this.playerForm.addEventListener('submit', this.createPlayer.bind(this))
    this.characterForm.addEventListener('submit', this.showPlayerCharacters.bind(this))
    this.myCharacter.addEventListener('dblclick', this.handleCharacterClick.bind(this))
  }

  createPlayer(e) {
    e.preventDefault()
    
    let newPlayer = this.createPlayerBody.value
    if (newPlayer === ''){
     this.message.innerHTML = this.adapter.nameCheck('New player name')
     this.newCharacterForm.style.display = "none"
     this.myCharacter.style.display ="none"
    }
    else {
      const charName = this.adapter.titleCase(newPlayer)
      this.adapter.createPlayer(charName).then(player => {
      this.players.push(new Player(player))
    
      // this.createPlayerBody.value = ''
      // this.render(this.players)
      })
    }
  }

  showPlayerCharacters(e){
    e.preventDefault()
    let playerObj = []
    let playerName =  this.newPlayerBody.value
    
    if (playerName === ''){
      this.message.innerHTML = this.adapter.nameCheck('Player name')
    }
    else {
      
      const formattedPlayerName = this.adapter.titleCase(playerName)
      
      this.adapter.getPlayerByName(formattedPlayerName)
      .then(player => playerObj.push(new Player(player)))
      .then(() => {
      
      if (playerObj[0].id !== undefined ){
        document.getElementById('charBtn').disabled = false
        this.charBtn.style.display = "inline"
        this.message.innerHTML = ''
        this.render(playerObj)
        let myCharacter = document.getElementById('my-characters')
        this.myCharacter.style.display = "table"
       }
      else {
        document.getElementById('charBtn').disabled = true
        // this.playersContainer.innerHTML = ''
        this.newCharacterForm.style.display = "none"
        this.myCharacter.style.display ="none"
        this.message.innerHTML = this.adapter.nameCheck(playerName, 1)
      }
     })
    } 
  }

  exactMatch() {
    return this.players.find(  
      player => player.name.toLowerCase() === this.newPlayerBody.value.toLowerCase()
    )
  }

  render(player){    
    this.charactersContainer = document.getElementById('characters-container')
    this.charactersContainer.innerHTML =  player.map(p => p.renderLi())
  }

  handleCharacterClick(e) {
    if (e.target.classList.contains('delete-character-link')){
        console.log('will delete', e.target.parentNode.parentNode);
        this.deleteCharacter(e)
    } else {
        this.toggleCharacter(e)
    }
  }

  toggleCharacter(e) {
    const tr = e.target
    tr.contentEditable = "true"
    tr.focus()
    tr.classList.add('editable')
}

  deleteCharacter(e) {
    const tr = e.target.parentNode.parentNode
    const id = tr.dataset.id
    console.log(id)
    this.adapter.deleteCharacter(id)
    tr.remove()
}


}