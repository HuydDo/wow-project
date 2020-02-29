class Characters{
  constructor() {
    this.characters = []
    this.players = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    this.fetchAndLoadCharacters()
  }

  initBindingAndEvenListeners(){
    this.charactersContainer = document.getElementById('characters-container')
    this.playerName = document.getElementById('playerName')
    this.selectGender = document.querySelector('#gender')
    this.selectRace = document.querySelector('#race')
    this.selectClass = document.querySelector('#charClass')
    this.newCharacterBody = document.getElementById('myName')
    this.newCharacterForm = document.getElementById('new-character-form')
    this.createPlayerBody = document.getElementById('new-player-body')
    this.message = document.getElementById('message')
    this.newCharacterForm.addEventListener('submit', this.createCharacter.bind(this))


    //login
    this.loginPlayerForm = document.getElementById('login-player-form')
    this.loginPlayerForm.addEventListener('submit', this.loginUser.bind(this))

    //hide my-character table
    this.myCharacter = document.getElementById('my-characters')
    this.myCharacter.style.display ="none"
    
    //hide new-character-form
    this.newCharacterForm.style.display="none"

    this.charBtn = document.getElementById('charBtn')
    this.playerBtn = document.getElementById('playerBtn')
  
    //hide charBtn and playerForm
    this.charBtn.style.display = "none"
  }

  loginUser(e){
    e.preventDefault()
    console.log('e.target: ', e.target.childNodes[1].childNodes[2].nextElementSibling.value);
    const btn = e.target.childNodes[1].childNodes[2].nextElementSibling
    const btnText = e.target.childNodes[1].childNodes[2].nextElementSibling.value
    if (btnText == 'Login') {
        const value = this.createPlayerBody.value
        if (value ==''){
          this.message.innerHTML = this.adapter.nameCheck('Player name')
        }
        else {
          this.adapter.loginUser(value)
              .then(player => {
                  console.log('Id: ' + player)
                  if (player !== null){
                    localStorage.setItem('currentUser', parseInt(player.id))
                    console.log(`currentUser ${player.name} set with id: ${localStorage.getItem('currentUser')}`);
                  }
                  else {
                    this.message.innerHTML = this.adapter.nameCheck(value, 1)
                  }
               })
              .then(() => this.render())
          // this.createPlayerBody.value = ""
          btn.setAttribute('value', 'Logout')
        }
    } 
    else {
        localStorage.clear()
        location.reload()
        btn.setAttribute('value', 'Login')
    }
    
  }

  createCharacter(e) {
    e.preventDefault()
    
    const player = this.createPlayerBody.value
    const gender = this.selectGender.value
    const race = this.selectRace.value
    const character_class = this.selectClass.value
    const name = this.newCharacterBody.value

    if (name === ''){
      this.message.innerHTML = this.adapter.nameCheck('Name')
    }
    else {
      const charName = this.adapter.titleCase(player)
      this.adapter.createCharacter(gender, name, race, character_class, charName)
        .then(character => {
          this.characters.push(new Character(character))
          // this.newCharacterBody.value = ''
          this.render()
        })
     }
     
    }

  fetchAndLoadCharacters() {
    this.adapter.getCharacters()
      .then(characters => {
        characters.forEach(character => this.characters.push(new Character(character)))
      })
      .then(() => {
        this.render()
      })
  }

  render() {
    const curr_player = localStorage.getItem('currentUser')
    if (curr_player) {
    console.log(this.characters.filter(character => character.player_id == curr_player).map(character => character.renderLi()).join(''))
    console.log('curr_player:' + curr_player)
      this.charBtn.style.display = "inline"
      this.message.innerHTML = ''
      this.myCharacter.style.display = "table"
      this.playerBtn.style.display = "none"

      this.charactersContainer.innerHTML = `${this.characters.filter(character => character.player_id == curr_player).map(character => character.renderLi()).join('')}`

    } else {
      this.charactersContainer.innerHTML  = 'Please login!'

      // this.charBtn.style.display = "none"
      // this.playerBtn.style.display = "inline"
      // this.newCharacterForm.style.display = "none"
      // this.myCharacter.style.display ="none"
      // this.message.innerHTML = this.adapter.nameCheck(playerName, 1)
    }
  }
  

  

}