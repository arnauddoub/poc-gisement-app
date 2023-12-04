import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { GouvAddressesResponse } from 'shared/types/externals/GouvAddressesResponse'

export default class LocationsController {
  public async autocomplete({ request, response }: HttpContextContract) {
    const query = request.input('query')
    const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}`)
    const data = (await res.json()) as GouvAddressesResponse
    return response.ok(data.features)
  }
}
