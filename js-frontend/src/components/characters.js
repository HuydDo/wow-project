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
    this.characterForm = document.getElementById('new-character-form')
    this.createPlayerBody = document.getElementById('new-player-body')
    this.message = document.getElementById('message')
    this.characterForm.addEventListener('submit', this.createCharacter.bind(this))


    //login
    this.loginPlayerForm = document.getElementById('login-player-form')
    this.loginPlayerForm.addEventListener('submit', this.loginUser.bind(this))

  }

  loginUser(e){
    e.preventDefault()
    // debugger  
    console.log('e.target: ', e.target.childNodes[1].childNodes[2].nextElementSibling.value);
    const btn = e.target.childNodes[1].childNodes[2].nextElementSibling
    const btnText = e.target.childNodes[1].childNodes[2].nextElementSibling.value
    if (btnText == 'Login') {
        const value = this.createPlayerBody.value
        console.log(value)
        // debugger
        this.adapter.loginUser(value)
            .then(user => {
                localStorage.setItem('currentUser', parseInt(user.id))
                console.log(`currentUser ${user.username} set with id: ${localStorage.getItem('currentUser')}`);
            })
            .then(() => this.render())
        // this.createPlayerBody.value = ""
        btn.setAttribute('value', 'Logout')
    } else {
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
          // this.render()
          this.render(this.characters)
  
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
    const curr_user = localStorage.getItem('currentUser')
    if (curr_user) {
      this.charactersContainer.innerHTML = `${this.characters.filter(character => character.player_id == curr_user).map(character => character.renderLi()).join('')}`

      // this.notesContainer.innerHTML = `${this.notes.filter(note => note.user_id == curr_user).map(note => note.renderLi()).join('')}`
    } else {
      this.charactersContainer.innerHTML  = 'Please login!'
    }
  }
    // this.not

  // filteredPlayer() {
  //   return this.players.filter(player => {
  //     return player.name.toLowerCase().includes(this.playerName
  //       .value.toLowerCase())
  //   })
  // }


}