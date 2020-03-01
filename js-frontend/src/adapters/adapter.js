const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/api/v1/players`
const CHARACTERS_URL = `${BASE_URL}/api/v1/characters`

class Adapter {
  constructor() {
    this.charactersUrl = CHARACTERS_URL
    this.playersUrl = PLAYERS_URL
  }

  loginPlayer(value) {
    const player = {
      name: value
    }
    return fetch(`${this.playersUrl}/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          player
        })
      })
      .then(res => res.json())
  }

  getCharacters() {
    return fetch(this.charactersUrl).then(res => res.json())
  }

  getPlayers() {
    return fetch(this.playersUrl).then(res => res.json())
  }

  // ES6 syntax
  // async getPlayerByName(name) {
  //    const response = await fetch(`${this.playersUrl}/${name}`)
  //    const json = await response.json()
  //    return json
  // }

  getPlayerByName(name) {
    return fetch(`${this.playersUrl}/${name}`).then(res => res.json())
  }
  
  createCharacter(gender, name, race, character_class, player_id) {
    const character = {
      gender,
      name,
      race,
      character_class,
      player_id
    }
    return fetch(this.charactersUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        character
      })
    })
    .then(res => {
      if (!res.ok) { return Promise.reject({
        status: res.status,
        statusText: res.statusText,
        })}
      return res.json()
    })
  }

  deleteCharacter(id) {
    return fetch(this.charactersUrl + `/${id}`, {
        method: 'DELETE'
      })
      // .then(res => res.json())
      .then(res => {
        if (!res.ok) { return Promise.reject({
          status: res.status,
          statusText: res.statusText,
          })}
        return res.json()
      })
  }

  createPlayer(name) {
    const player = {
      name,
    }
    return fetch(this.playersUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        player
      })
    })
    .then(res => {
      if (!res.ok) { return Promise.reject({
        status: res.status,
        statusText: res.statusText,
        })}
      return res.json()
    })
  }

  titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  nameCheck(str, value = 0) {
    let btnStr = `<div class='alert alert-warning alert-dismissible fade show'>
    <button type='button' class='close' data-dismiss='alert'>&times;</button>`
    if (value == 1) {
      return btnStr += ` Can't find the player ${str}.  Please try again or create a new player.</div>`
    }
    if (value == 2) {
      return btnStr += `${str} </div>`
    } else {
      return btnStr += `${str} can't be empty</div>`
    }
  }
}