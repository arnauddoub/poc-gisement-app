import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
// import { PropertyCategory } from 'shared/enums/PropertyCategory'
// import { PropertyState } from 'shared/enums/PropertyState'
// import { PropertyType } from 'shared/enums/PropertyType'

export default class PropertyStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    state: schema.string(),
    category: schema.string(),
    type: schema.string(),
    // state: schema.enum.optional(Object.values(PropertyState)),
    // category: schema.enum.optional(Object.values(PropertyCategory)),
    // type: schema.enum.optional(Object.values(PropertyType)),
    price: schema.number(),
    surface: schema.number(),
    location: schema.object().members({
      label: schema.string(),
      address: schema.string(),
      zipCode: schema.string(),
      city: schema.string(),
      longitude: schema.number(),
      latitude: schema.number(),
    }),
  })

  public messages: CustomMessages = {}
}
