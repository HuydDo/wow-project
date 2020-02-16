class Players{
  constructor() {
    this.players = []
    this.playerNames= []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    this.fetchAndLoadPlayers()
  }

  initBindingAndEvenListeners(){
    this.playersContainer = document.getElementById('players-container')
    this.playersMyPlayer = document.getElementById('myPlayer')
  }

  fetchAndLoadPlayers(){
    this.adapter.getPlayers()
    .then(players => {
      players.forEach(player => this.players.push(new Player(player)))
      console.log(this.players)
    })
    .then(() => {
      this.render()
      this.renderPlayerNames()
    })
  }
//get the index from player dropdown list and render that player's character(s)
  render(){
    this.playersContainer.innerHTML =  this.players.map(player => 
      player.renderLi()).join('')
  }

 
  renderPlayerNames(){
    this.players.forEach(e => {
      this.playerNames.push(e.name)
    })
    // console.log(this.playerNames)
    renderDropdown("#myPlayer", this.playerNames)
    // debugger
    // let selectElem = document.getElementById("playerName")
    // selectElem.addEventListener('change', function() {

    //   let index = selectElem.selectedIndex
    //   console.log('selectedIndex:' + index)
    // })
    
  }
  
  searchPlayerName(e){
    e.preventDefault()
    document.querySelector('playerName')
  }
 
  
 
}