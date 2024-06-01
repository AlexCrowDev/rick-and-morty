export default class CharacterService {
  apiClient

  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async getCharacters(name, status, page) {
    const charactersResp = await this.apiClient.getCharacters(name, status, page)
    
    for (let character of charactersResp.results) {
      if (character.episode) {
        const firstEpisodeUrl = character.episode[0]
        const firstEpisode = await this.apiClient.get(firstEpisodeUrl)
        character.episode = firstEpisode.name
      }
    }
    
    return charactersResp
  }
}