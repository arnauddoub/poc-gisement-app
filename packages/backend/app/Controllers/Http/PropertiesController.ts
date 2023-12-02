import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Property from 'App/Models/Property'

export default class PropertiesController {
  public async index({ response }: HttpContextContract) {
    const properties = await Property.query().preload('location')
    return response.ok(properties)
  }
}
