class Players{
  constructor() {
    // this.players = []
    this.playerNames= []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    // this.fetchAndLoadPlayers()
  }
  // <input type="text" name="player-body" id="new-player-body"></input>
  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
    this.newPlayerBody = document.getElementById('new-player-body')
    this.characterForm = document.getElementById('new-player-form')
    this.characterForm.addEventListener('submit', this.fetchAndLoadPlayers.bind(this))
  }

  fetchAndLoadPlayers(e){
    this.players = []
    e.preventDefault()
    const value = this.newPlayerBody.value
    this.adapter.getPlayers()
    .then(players => {
        players.forEach(player => this.players.push(new Player(player)))
    })
    .then(() => {
    let filteredPlayer =  this.filteredPlayer()
    // let filteredPlayer =  this.exactMatch()
    
    this.newPlayerBody.value =''  
    this.render(filteredPlayer)
    //   this.renderPlayerNames()
    })
  }

  filteredPlayer() {
    return this.players.filter(player =>     
      player.name.toLowerCase().includes(this.newPlayerBody.value.toLowerCase())
    );
  }

  exactMatch() {
    return this.filteredPlayer().find(
      player => player.name.toLowerCase() === this.newPlayerBody.value.toLowerCase()
    );
  }

  render(player){
    console.log(player)
    this.playersContainer.innerHTML =  player.map(player => 
      player.renderLi())
  }
 
  renderPlayerNames(){
    this.players.forEach(e => {
      this.playerNames.push(e.name)
    })
    // console.log(this.playerNames)
    renderDropdown("#myPlayer", this.playerNames)
  }
  
}