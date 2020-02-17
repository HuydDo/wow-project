class Characters{
  constructor() {
    this.characters = []
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
    
    this.characterForm = document.getElementById('new-character-form')
    this.characterForm.addEventListener('submit', this.createCharacter.bind(this))
  }

  createCharacter(e) {
    // console.log(this)
    e.preventDefault()
    
    const gender = this.selectGender.value
    const name = this.newCharacterBody.value
    const race = this.selectRace.value
    const character_class = this.selectClass.value
    // console.log(`class: ${character_class}`)
    this.adapter.createCharacter(gender, name, race, character_class, 1).then(character => {
      console.log(character)
      // debugger
      this.characters.push(new Character(character))
      this.newCharacterBody.value = ''
      // this.render()
    })
  }

  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    .then(characters => {
      characters.forEach(character => this.characters.push(new Character(character)))
      console.log(this.characters)
    })
    .then(() => {
      this.render()
      // console.log(`name: ${this.newCharacterBody.value}, gender: ${this.selectGender.value}
      // race: ${this.selectRace.value}, class: ${this.selectClass.value}`)

    })
  }

  render(){
    this.charactersContainer.innerHTML =  this.characters.map(character => 
      character.renderLi()).join('')
      
  }
}