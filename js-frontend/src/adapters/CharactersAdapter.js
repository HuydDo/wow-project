class CharactersAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/characters'
  }
}

getCharacters() {
  return fetch(this.baseUrl)
  .then(res => res.json())
}

// adapter = new CharactersAdapter()

// const characters = adapter.getCharacters()