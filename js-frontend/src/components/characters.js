class Characters{
  constructor() {
    this.characters = []
    this.adapter = new Adapter()
    // this.bindEvenListeners()
    this.fetchAndLoadCharacters()
    this.fetchAndLoadPlayers()
  }

  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    .then(characters => {
      characters.forEach(character => this.characters.push(character))
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
    const charactersContainer = document.getElementById('characters-container')
    charactersContainer.innerHTML = 'my char here'
  }
}