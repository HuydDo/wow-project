class Players{
  constructor() {
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    this.fetchAndLoadPlayers()
  }

  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
  }

  fetchAndLoadPlayers(){
    this.adapter.getPlayers()
    .then(players => {
      players.forEach(player => this.players.push(new Player(player)))
      // console.log(this.players)
    })
    .then(() => {
      this.render()
    })
  }

  render(){
    this.playersContainer.innerHTML =  this.players.map(player => 
      player.renderLi()).join('')
  }
}