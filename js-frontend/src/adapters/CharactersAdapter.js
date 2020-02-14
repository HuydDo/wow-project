const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/api/v1/players`
const CHARACTERS_URL = `${BASE_URL}/api/v1/characters`

class CharactersAdapter {
  constructor() {
    // this.baseUrl = CHARACTERS_URL
    this.baseUrl = 'http://localhost:3000/api/v1/characters'
  }
}

getCharacters() {
  return fetch(this.baseUrl)
  .then(res => res.json())
}

// adapter = new CharactersAdapter()

// const characters = adapter.getCharacters()