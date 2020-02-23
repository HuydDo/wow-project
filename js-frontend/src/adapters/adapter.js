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
  
  // async getPlayerByName(name) {
  //    const response = await fetch(`${this.playersUrl}/${name}`)
  //    const json = await response.json()
  //    return json
  // }

   getPlayerByName(name) {
      return  fetch(`${this.playersUrl}/${name}`).then(res => res.json())
   }

  createCharacter(gender, name, race, character_class, player_id){
    const character = {
     gender,
     name,
     race,
     character_class,
     player_id
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
      name,
    }

    return fetch(this.playersUrl,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({player})
    }).then(res => res.json())
  }

  titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }

  nameCheck(str){
    return `<div class='alert alert-warning'>${str} can't be empty</div>`
  }
 
}
