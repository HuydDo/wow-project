
class Characters{
  constructor() {
    this.playerId 
    this.characters = []
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    this.fetchAndLoadCharacters()
  }

  initBindingAndEvenListeners(){
    this.charactersContainer = document.getElementById('characters-container')
    this.newCharacterBody = document.getElementById('new-character-body')
    
    this.selectGender = document.querySelector('#gender')
    this.selectRace = document.querySelector('#race')
    this.selectClass = document.querySelector('#charClass')
    //create new character
    this.characterForm = document.getElementById('new-character-form')
    this.characterForm.addEventListener('submit', this.createCharacter.bind(this))

    this.playerName = document.getElementById('new-player-body')

  }

  createCharacter(e) {
    // console.log(this)
    e.preventDefault()
    const gender = this.selectGender.value
    const name = this.newCharacterBody.value
    const race = this.selectRace.value
    const character_class = this.selectClass.value

    let strName = this.playerName.value
    // const charName= strName[0].toUpperCase() + strName.slice(1)
    
    const charName = this.titleCase(strName)
       
    console.log(`strName:`+ strName + `charName:`+ charName)
    // const id 
    this.getPlayerId(charName).then(playerId => console.log(`Id:` + playerId))

    // const id = this.playerId
    // if (id === undefined)
      // console.log(`player id not found`)
    // else{
    // console.log(`Player Id from createCharacter: ${id}`)

    debugger
    // this.playerId = this.getPlayerId(this.playerName.value)
    // console.log(`playerId: ${this.playerId}`)
    
    this.adapter.createCharacter(gender, name, race, character_class,id).then(character => {
      
      this.characters.push(new Character(character))
      this.newCharacterBody.value = ''
      // this.render()
      
    })
  //  }
  }

  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    .then(characters => {
      characters.forEach(character => this.characters.push(new Character(character)))
    })
    .then(() => {
      // this.render()
    })

  }

  render(){
    this.charactersContainer.innerHTML =  this.characters.map(character => 
      character.renderLi()).join('')
  }

  getPlayerId(name){
    // let player_id = 0
    // this.players = []

    this.adapter.getPlayerByName(name)
    .then(player => {
        //  players.forEach(player => console.log(`Player: ${player}`))
        console.log(`id was called:` + player.id) 
        // this.playerId = player.id
        return player.id
        // players.forEach(player => this.players.push(new Player(player)))
    })
    // .then(() => {
    // let playerObj =  this.filteredPlayer()
    // console.log(playerObj[0].id)
    // this.playerId =  playerObj[0].id
    // console.log(this.playerId)
    // debugger
    // return player_id
    // })

    .catch(error => {
      return error;
    })
  }

  filteredPlayer() {
    return this.players.filter(player =>  {   
      return player.name.toLowerCase().includes(this.playerName
        .value.toLowerCase())
    })
  }


 titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

}