class Players{
  constructor() {
    this.playerNames= []
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    // this.fetchAndLoadPlayers()
  }
  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
    this.newPlayerBody = document.getElementById('new-player-body')
    this.characterForm = document.getElementById('new-player-form')
    this.characterForm.addEventListener('submit', this.fetchAndLoadPlayers.bind(this))
    
    //create new player name
    this.createPlayerBody = document.getElementById('create-player-body')
    this.playerForm = document.getElementById('create-player-form')
    this.playerForm.addEventListener('submit', this.createPlayer.bind(this))

    this.playerName = document.getElementById('player-name')

  }

  createPlayer(e) {
    e.preventDefault()
    const name = this.createPlayerBody.value
    // console.log(name)
    this.adapter.createPlayer(name).then(player => {
    
    this.players.push(new Player(player))
    this.createPlayerBody.value = ''
    
    // this.render()
    })
  }

  fetchAndLoadPlayers(e){
    // this.players = []
    e.preventDefault()
    this.adapter.getPlayers()
    .then(players => {
        players.forEach(player => this.players.push(new Player(player)))
    })
    .then(() => {
    let result = `Can't find the player name ${this.newPlayerBody.value}.  Please try again or create a new player name.`
    let filteredPlayer =[]
    // console.log(this.exactMatch())
    
    if (this.exactMatch()!== undefined){
      filteredPlayer.push(this.exactMatch())
      this.playerName.innerHTML = ''
      // this.newPlayerBody.value =''  
      this.render(filteredPlayer)
    //   this.renderPlayerNames()
    }
    else {
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