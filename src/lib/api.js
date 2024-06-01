
export default class ApiClient {
  server
  
  constructor(server) {
    this.server = server
  }

  async get(url) {
    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    return await resp.json()
  }

  async getCharacters(name, status, page) {
    let url = this.server + '/api/character/?'

    const params = new URLSearchParams()
    
    if (name) params.append('name', name)
    if (status) params.append('status', status)
    if (page) params.append('page', page)

    url += params.toString()
    return this.get(url)
  }
}