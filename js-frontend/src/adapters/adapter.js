const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/api/v1/players`
const CHARACTERS_URL = `${BASE_URL}/api/v1/characters`

class Adapter {
  constructor() {
    this.charactersUrl = CHARACTERS_URL
    this.playersUrl = PLAYERS_URL
    // this.baseUrl = 'http://localhost:3000/api/v1/characters'
  }


  getCharacters() {
    return fetch(this.charactersUrl).then(res => res.json())
  }

  getPlayers() {
    return fetch(this.playersUrl).then(res => res.json())
  }

  getPlayerByName(name) {
    console.log(`${this.playersUrl}/${name}`)
    debugger
    return fetch(`${this.playersUrl}/${name}`).then(res => res.json())
  }

  createCharacter(gender, name, race, character_class, player_id){
    const character = {
      gender: gender,
      name: name,
      race: race,
      character_class: character_class,
      player_id : player_id
    }

    return fetch(this.charactersUrl,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({character})
    }).then(res => res.json())

  }

  
}
