class Characters {
  constructor() {
    this.characters = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
  }

  initBindingAndEvenListeners() {
    this.charactersContainer = document.getElementById('characters-container')
    this.selectGender = document.querySelector('#gender')
    this.selectRace = document.querySelector('#race')
    this.selectClass = document.querySelector('#charClass')
    this.newCharacterBody = document.getElementById('myName')
    this.newCharacterForm = document.getElementById('new-character-form')
    this.newPlayerBody = document.getElementById('new-player-body')
    this.message = document.getElementById('message')
    this.newCharacterForm.addEventListener('submit', this.createCharacter.bind(this))

    //login form
    this.loginPlayerForm = document.getElementById('login-player-form')
    this.loginPlayerForm.addEventListener('submit', this.loginPlayer.bind(this))

    //hide my-character table
    this.myCharacter = document.getElementById('my-characters')
    this.myCharacter.style.display = "none"
    this.myCharacter.addEventListener('dblclick', this.handleCharacterClick.bind(this))
    //hide new-character-form
    this.newCharacterForm.style.display = "none"

    this.charBtn = document.getElementById('charBtn')
    this.playerBtn = document.getElementById('playerBtn')

    //hide charBtn
    this.charBtn.style.display = "none"

    this.createPlayerForm = document.getElementById('create-player-form')

    this.sortChar = document.getElementById('sortChar')
    this.sortChar.addEventListener('click', this.sortCharacter.bind(this))
  }

  sortCharacter(e){
    // debugger
    e.preventDefault()
    this.adapter.sortChar()
    .then(characters => {
      
      // characters.forEach(character => this.characters.push(new Character(character)))
      this.characters.sort(function(a,b){
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    })
    .then(() => {
     
      console.log(this.characters)
      this.render()
    })

  }

  loginPlayer(e) {
    e.preventDefault()
    const btn = e.target.childNodes[1].childNodes[2].nextElementSibling
    const btnText = e.target.childNodes[1].childNodes[2].nextElementSibling.value
    if (btnText == 'Login') {
      const value = this.newPlayerBody.value
      if (value == '') {
        this.message.innerHTML = this.adapter.nameCheck('Player name')
      } else {
        const formattedName = this.adapter.titleCase(value)
        this.adapter.loginPlayer(formattedName)
          .then(player => {
            if (player !== null) {
              localStorage.setItem('currentPlayer', parseInt(player.id))
              btn.setAttribute('value', 'Logout')
              this.fetchAndLoadCharacters()
            } 
          })
          .catch( err => {
            // console.log(err)
            this.message.innerHTML = this.adapter.nameCheck('status: ' + err.status + ' statusText: ' + err.statusText + ' Can not found player ' + value, 2)
          })

      }
    } else {
      localStorage.clear()
      location.reload() //reload the page and fetch the data
      btn.setAttribute('value', 'Login')
    }
  }

  createCharacter(e) {
    e.preventDefault()

    const player = this.newPlayerBody.value
    const gender = this.selectGender.value
    const race = this.selectRace.value
    const character_class = this.selectClass.value
    const name = this.newCharacterBody.value

    if (name === '') {
      this.message.innerHTML = this.adapter.nameCheck('Name')
    } 
    else {
      const charName = this.adapter.titleCase(player)
      this.adapter.createCharacter(gender, name, race, character_class, charName)
      .then(character => {
        this.characters.push(new Character(character))
        this.newCharacterBody.value = ''
        this.render()
      })
      .catch( err => {
        // console.log(err)
        this.message.innerHTML = this.adapter.nameCheck('status: ' + err.status + ' statusText: ' + err.statusText + ' Character name is already exist.', 2)
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
    const curr_player = localStorage.getItem('currentPlayer')
    if (curr_player) {
      this.charBtn.style.display = "inline"
      this.message.innerHTML = ''
      this.myCharacter.style.display = "table"
      this.playerBtn.style.display = "none"
      this.createPlayerForm.style.display = "none"
      this.charactersContainer.innerHTML = `${this.characters.filter(character => character.player_id == curr_player).map(character => character.renderLi()).join('')}`
    } 
  }

  handleCharacterClick(e) {
    if (e.target.classList.contains('delete-character-link')) {
      this.deleteCharacter(e)
    }
  }

  deleteCharacter(e) {
    const tr = e.target.parentNode.parentNode
    const id = tr.dataset.id
    this.adapter.deleteCharacter(id)
    .catch( err => {
      // console.log(err)
      this.message.innerHTML = this.adapter.nameCheck('status: ' + err.status + ' statusText: ' + err.statusText, 2)
    })
    tr.remove()
    this.characters = this.characters.filter(character => character.id != id)
  }

}