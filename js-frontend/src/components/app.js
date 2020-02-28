class App {
  constructor() {
    this.characters = new Characters()
    this.players = new Players()
    this.clearStorage()
  }

  clearStorage() {
    localStorage.clear()
  }
}