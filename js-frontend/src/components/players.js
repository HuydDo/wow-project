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
    this.createPlayerBody = document.getElementById('create-player-body')
    this.playerForm = document.getElementById('create-player-form')
    this.message = document.getElementById('message')

    document.getElementById('create-player-form').style.display="none"
    document.getElementById('new-character-form').style.display="none"
    
    document.getElementById('my-characters').style.display="none"
    document.getElementById('charBtn').disabled = true

    this.playerForm.addEventListener('submit', this.createPlayer.bind(this))
    this.characterForm.addEventListener('submit', this.showPlayerCharacters.bind(this))
  }

  createPlayer(e) {
    e.preventDefault()
    
    let newPlayer = this.createPlayerBody.value
    console.log(newPlayer)
    if (newPlayer === ''){
       this.message.innerHTML = this.adapter.nameCheck('New player name')
    }
    else {
      const charName = this.adapter.titleCase(newPlayer)
      this.adapter.createPlayer(charName).then(player => {
      this.players.push(new Player(player))
      // this.createPlayerBody.value = ''
      // this.render(this.players)
      })
    }
  }

  showPlayerCharacters(e){
    e.preventDefault()
    let playerObj = []
    let playerName =  this.newPlayerBody.value
    // let result = `Player name can't be empty.`
    
    if (playerName === ''){
    //  this.message.innerHTML = result
    this.message.innerHTML = this.adapter.nameCheck('Player name')
    }
    else {
      const formattedPlayerName = this.adapter.titleCase(playerName)
      console.log(`Formatted Name:` + formattedPlayerName)
      // this.adapter.getPlayers()
      this.adapter.getPlayerByName(formattedPlayerName)
      // .then(players => {
      //     players.forEach(player => this.players.push(new Player(player)))
      // })

      .then(player => playerObj.push(new Player(player)))
      
      .then(() => {
      let result = `Can't find the player ${this.newPlayerBody.value}.  Please try again or create a new player name.`
      let filteredPlayer =[]
      console.log(playerObj[0].id)
      // if (this.exactMatch()!== undefined && playerName !==''){
      if (playerObj[0].id !== undefined ){
      // filteredPlayer.push(this.exactMatch())
      document.getElementById('charBtn').disabled = false
      // document.getElementById('playerBtn').disabled = true
      this.message.innerHTML = ''
      // this.newPlayerBody.value =''  

      this.render(playerObj)
      // this.render(filteredPlayer)
      //   this.renderPlayerNames()
      }
      else {
       document.getElementById('charBtn').disabled = true
      //  document.getElementById('playerBtn').disabled = false
       this.playersContainer.innerHTML = '' 
       this.message.innerHTML = result
      }
     })
    } 
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
    // this.playersContainer.innerHTML =  player.map(p => p.renderLi())
    this.charactersContainer = document.getElementById('characters-container')
    this.charactersContainer.innerHTML =  player.map(p => p.renderLi())
  }
 
  // renderPlayerNames(){
  //   this.players.forEach(e => {
  //     this.playerNames.push(e.name)
  //   })
  //   renderDropdown("#myPlayer", this.playerNames)
  // }
  
}