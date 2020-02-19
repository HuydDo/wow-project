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
  //   console.log(`${this.playersUrl}/${name}`)
  //   let configObj = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //       }
  // }
  //   const player  = fetch('http://localhost:3000/api/v1/players/1', configObj).then(resp => resp.json())
    const player  = fetch(`${this.playersUrl}/${name}`).then(res => res.json())
    console.log(player)
    // debugger
    return player
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

  createPlayer(name){
    const player = {
      name: name,
    }

    return fetch(this.playersUrl,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({player})
    }).then(res => res.json())

  }

  
}
