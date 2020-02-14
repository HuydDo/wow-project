class Characters {
  constructor(){
    this.Characters = []
    this.adapter = new CharactersAdapter()
    // this.bindEvenListeners()
    this.fetchAndLoadCharacters()
  }


  fetchAndLoadCharacters(){
    this.adapter.getCharacters()
    .then(characters => {
      console.log(characters)
    })
  }
}