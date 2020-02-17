class Players{
  constructor() {
    this.players = []
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
    e.preventDefault()
    const value = (this.newPlayerBody.value)
    console.log(value)
    this.adapter.getPlayers()
    .then(players => {
       players.forEach(player =>  {
        // console.log(player.name)
        if (player.name == value){
          this.players.push(new Player(player))
          this.newPlayerBody = ''
          this.render()
        }
        // else 
          // console.log('player is not found')
          // return
        // end
       })
       console.log(this.players)
    })
    // .then(() => {
    //   this.render()
    //   // this.renderPlayerNames()
    // })
  }

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
  
}