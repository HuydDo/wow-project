class Characters{
  constructor() {
    this.characters = []
    this.adapter = new Adapter()
    this.initBindingAndEvenListeners()
    this.fetchAndLoadCharacters()
    // this.fetchAndLoadPlayers()
  }

  initBindingAndEvenListeners(){
    this.charactersContainer = document.getElementById('characters-container')
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

  // fetchAndLoadPlayers(){
  //   this.adapter.getPlayers().then(players => {
  //    
  //  console.log(players)
  //   })
  // }

  render(){
    this.charactersContainer.innerHTML =  this.characters.map(character => 
      character.renderLi()).join('')
  }
}