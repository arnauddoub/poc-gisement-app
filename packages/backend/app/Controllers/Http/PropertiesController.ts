import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Property from '../../Models/Property'

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
    const property = await Property.create(request.all())
    await property.related('location').create(request.body().location)
    return response.created(property)
  }
}
