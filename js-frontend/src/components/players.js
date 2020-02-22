class Players{
  constructor() {
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    // this.fetchAndLoadPlayers()
  }
  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
    this.newPlayerBody = document.getElementById('new-player-body')
    this.characterForm = document.getElementById('new-player-form')
    this.characterForm.addEventListener('submit', this.showPlayerCharacters.bind(this))
    this.createPlayerBody = document.getElementById('create-player-body')
    this.playerForm = document.getElementById('create-player-form')
    this.playerForm.addEventListener('submit', this.createPlayer.bind(this))

    this.playerName = document.getElementById('player-name')

    document.getElementById("new-character-form").style.display="none";
    document.getElementById('myBtn').disabled = true
  }

  createPlayer(e) {
    e.preventDefault()
    let newPlayer = this.createPlayerBody.value
    this.adapter.createPlayer(newPlayer).then(player => {
    this.players.push(new Player(player))
    // this.createPlayerBody.value = ''
    // this.render()
    })
  }

  showPlayerCharacters(e){
    e.preventDefault()
    this.adapter.getPlayers()
    // this.adapter.getPlayerByName(name)
    .then(players => {
        players.forEach(player => this.players.push(new Player(player)))
    })
    .then(() => {
    let result = `Can't find the player ${this.newPlayerBody.value}.  Please try again or create a new player name.`
    let filteredPlayer =[]
    
    if (this.exactMatch()!== undefined && this.newPlayerBody.value !==''){
      filteredPlayer.push(this.exactMatch())
      document.getElementById('myBtn').disabled = false
      this.playerName.innerHTML = ''
      // this.newPlayerBody.value =''  

      this.render(filteredPlayer)
    //   this.renderPlayerNames()
    }
    else {
     document.getElementById('myBtn').disabled = true
     this.playersContainer.innerHTML = '' 
     this.playerName.innerHTML = result
    }
   })
  }

  filteredPlayer() {
    return this.players.filter(player =>   
       player.name.toLowerCase().includes(this.newPlayerBody.value.toLowerCase())
     );
  }

  exactMatch() {
    return this.players.find(  
      player => player.name.toLowerCase() === this.newPlayerBody.value.toLowerCase()
    );
  }

  render(player){
    this.playersContainer.innerHTML =  player.map(p => p.renderLi())
  }
 
  renderPlayerNames(){
    this.players.forEach(e => {
      this.playerNames.push(e.name)
    })
    renderDropdown("#myPlayer", this.playerNames)
  }
  
}