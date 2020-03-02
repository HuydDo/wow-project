class Players{
  constructor() {
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
  }
  initBindingAndEvenListeners(){
    this.createPlayerBody = document.getElementById('create-player-body')
    this.createPlayerForm = document.getElementById('create-player-form')
    this.message = document.getElementById('message')
    this.newCharacterForm = document.getElementById('new-character-form')
    this.myCharacter = document.getElementById('my-characters')
    this.createPlayerForm.style.display = "none"
    this.createPlayerForm.addEventListener('submit', this.createPlayer.bind(this))
  
  }

  createPlayer(e) {
    e.preventDefault()
    
    let newPlayer = this.createPlayerBody.value
    //check if new player name is empty
    if (newPlayer === ''){
     this.message.innerHTML = this.adapter.nameCheck('New player name')
     this.newCharacterForm.style.display = "none"
     this.myCharacter.style.display ="none"
    }
    else {
      const charName = this.adapter.titleCase(newPlayer)
      this.adapter.createPlayer(charName)
      .then(player => {
        this.createPlayerForm.style.display = "none"
        this.message.innerHTML = ''
        this.message.innerHTML = this.adapter.nameCheck('Player was created successfully.', 2)
        })
      .catch( err => {
        console.log(err)
        this.message.innerHTML = this.adapter.nameCheck('status: ' + err.status + ' statusText: ' + err.statusText + ' Player name is already exist.', 2)
      })
    }
  }

}