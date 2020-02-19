class Players{
  constructor() {
    this.playerNames= []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    // this.fetchAndLoadPlayers()
  }
  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
    this.newPlayerBody = document.getElementById('new-player-body')
    this.characterForm = document.getElementById('new-player-form')
    this.characterForm.addEventListener('submit', this.fetchAndLoadPlayers.bind(this))
    
    this.noPlayerName = document.getElementById('no-player-name')
  }

  fetchAndLoadPlayers(e){
    this.players = []
    e.preventDefault()
    this.adapter.getPlayers()
    .then(players => {
      
        players.forEach(player => this.players.push(new Player(player)))
    })
    .then(() => {
    let result = `Can't find the player name. Please try again or create a new player name.`
    let filteredPlayer =[]
    // console.log(this.exactMatch())
    
    if (this.exactMatch()!== undefined){
      filteredPlayer.push(this.exactMatch())
      this.noPlayerName.innerHTML = ''
      // this.newPlayerBody.value =''  
      this.render(filteredPlayer)
    //   this.renderPlayerNames()
    }
    else 
     this.noPlayerName.innerHTML = result
    // end
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