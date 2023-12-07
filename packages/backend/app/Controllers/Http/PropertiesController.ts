import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Property from '../../Models/Property'
import Location from '../../Models/Location'
import PropertyStoreValidator from '../../Validators/PropertyStoreValidator'

export default class PropertiesController {
  public async index({ response }: HttpContextContract) {
    const properties = await Property.query().preload('location').orderBy('created_at', 'desc')
    return response.ok(properties)
  }

  public async show({ params, response }: HttpContextContract) {
    const property = await Property.findOrFail(params.id)
    await property.load('location')
    return response.ok(property)
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(PropertyStoreValidator)
    const location = await Location.create(payload.location)
    const property = await location.related('property').create(request.body())
    return response.created(property)
  }
}
