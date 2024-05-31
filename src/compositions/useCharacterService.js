import CharacterService  from "@/lib/services"
import useApiClient from "@/compositions/useApiClient"

let characterService
let apiClient = useApiClient()

export default () => {
  if (!characterService) {
    characterService = new CharacterService(apiClient)
  }

  return characterService
}