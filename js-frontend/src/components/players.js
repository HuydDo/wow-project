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
      // console.log(players)
      //  let filteredData = players.find(player => player.name.toLowerCase()===value.toLowerCase())
      //  console.log(filteredData)
       players.forEach(player =>  {
        // console.log(player.name)
        // if (player.name == value){
          this.players.push(new Player(player))
          this.newPlayerBody = ''
          // this.exactMatch()
          // this.render()
        // }
        // else 
          // console.log('player is not found')
          // return
        // end
       })
      //  console.log(this.players)
    })
     .then(() => {
     let filteredPlayer =  this.filteredPlayer(value)
     console.log(filteredPlayer)
      // this.exactMatch()
      this.render(filteredPlayer)
      //   this.renderPlayerNames()
     })
  }

  filteredPlayer(value) {
    const val = value
    return this.players.filter(player =>
      // console.log(`Input: ${val} Player Name: ${player.name.toLowerCase()}`)
      player.name.toLowerCase().includes(value.toLowerCase())
    );
  }
  exactMatch() {
    return this.filteredPlayer.find(
      player => player.name.toLowerCase() === this.newPlayerBody.value.toLowerCase()
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
    // debugger
    // let selectElem = document.getElementById("playerName")
    // selectElem.addEventListener('change', function() {

    //   let index = selectElem.selectedIndex
    //   console.log('selectedIndex:' + index)
    // })
    
  }
  
}