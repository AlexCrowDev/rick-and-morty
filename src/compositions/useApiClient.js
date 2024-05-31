import ApiClient from '@/lib/api'

let apiClient

export default () => {
  if (!apiClient) {
    apiClient = new ApiClient("https://rickandmortyapi.com");
  }

  return apiClient;
}
