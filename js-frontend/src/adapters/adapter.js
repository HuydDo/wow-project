const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/api/v1/players`
const CHARACTERS_URL = `${BASE_URL}/api/v1/characters`

class Adapter {
  constructor() {
    this.charactersUrl = CHARACTERS_URL
    this.playersUrl = PLAYERS_URL
    // this.baseUrl = 'http://localhost:3000/api/v1/characters'
  }


  async getCharacters() {
    const res = await fetch(this.charactersUrl)
    return await res.json()
  }

  getPlayers() {
    return fetch(this.playersUrl).then(res => res.json())
  }

  createCharacter(value){
    const character = {
      gender: 'male',
      name: value,
      race: 'Human',
      character_class: 'Hunter',
      player_id : 1
    }
    // debugger
    return fetch(this.charactersUrl,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({character})
    }).then(res => res.json())

  }

}
