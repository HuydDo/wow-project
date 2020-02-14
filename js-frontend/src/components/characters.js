class Characters{
  constructor() {
    this.characters = []
    this.adapter = new Adapter()
    // this.bindEvenListeners()
    this.fetchAndLoadCharacters()
    // this.fetchAndLoadPlayers()
  }

  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    
    .then(characters => {
      characters.forEach(character => this.characters.push(new Character(character)))
      console.log(this.characters)
      
    })
    .then(() => {
      this.render()
    })
  }

  // fetchAndLoadPlayers(){
  //   this.adapter.getPlayers().then(players => {
  //     console.log(players)
  //   })
  // }

  render(){
    const charactersArray = this.characters.map(character => `<li>${character.gender}</li>`)
    console.log(charactersArray)
    const charactersContainer = document.getElementById('characters-container')
    // charactersContainer.innerHTML =  
  }
}