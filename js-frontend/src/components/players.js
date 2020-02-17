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
    // console.log(value)
    this.adapter.getPlayers()
    .then(players => {
        players.forEach(player => this.players.push(new Player(player)))
      //  console.log(this.players)
    })
    .then(() => {
      console.log(value)
    let filteredPlayer =  this.filteredPlayer(value)
    //  let filteredPlayer =  this.exactMatch(this.newPlayerBody.value)
    
    console.log('this.player after:' + filteredPlayer)
      // this.exactMatch()
    this.newPlayerBody.value =''  
    this.render(filteredPlayer)
      //   this.renderPlayerNames()
     })
  }

  filteredPlayer(value) {
    return this.players.filter(player =>{
      console.log('this.players before:' +this.players)
      // console.log(`Input: ${value} Player Name: ${player.name.toLowerCase()}`)
      return player.name.toLowerCase().includes(value.toLowerCase())
    }
    );
  }
  exactMatch(value) {
    return this.filteredPlayer(value).find(
      player => player.name.toLowerCase() === value.toLowerCase()
    );
  }

  render(player){
    this.playersContainer.innerHTML =  player.map(player => 
      player.renderLi()).join('')
  }


 
  renderPlayerNames(){
    this.players.forEach(e => {
      this.playerNames.push(e.name)
    })
    // console.log(this.playerNames)
    renderDropdown("#myPlayer", this.playerNames)
  }
  
}