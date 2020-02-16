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
      this.renderPlayerName()
    })
  }

  render(){
    this.playersContainer.innerHTML =  this.players.map(player => 
      player.renderLi()).join('')
  }

 
  renderPlayerName(){
    
    this.players.forEach(e => {
      this.playerNames.push(e.name)
    })
    console.log(this.playerNames)
    renderDropdown("#myPlayer", this.playerNames)
    // return `Player Name: ${playerNames}`
  }
  
renderDropdown(tagId,arr) {
    let div = document.querySelector(tagId),
    frag = document.createDocumentFragment(),
    select = document.createElement("select")
  
    arr.forEach(e => select.options.add(new Option(e)))
    frag.appendChild(select)
    div.appendChild(frag)
  }
  
 
}