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
    this.characterForm = document.getElementById('new-character-form')
    this.characterForm.addEventListener('submit', this.createCharacter.bind(this))
  }

  createCharacter(e) {
    // console.log(this)
    console.log('createCharacter in characters.js was called')
    e.preventDefault()
    const value = (this.newCharacterBody.value)
    this.adapter.createCharacter(value).then(character => {
      this.characters.push(new Character(character))
      this.newCharacterBody.value = ''
      // this.render()
    })
  }

  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    .then(characters => {
      characters.forEach(character => this.characters.push(new Character(character)))
      // console.log(this.characters)
      
    })
    .then(() => {
      this.render()
    })
  }

  render(){
    console.log("render method was called")
    this.charactersContainer.innerHTML =  this.characters.map(character => 
      character.renderLi()).join('')
  }
}