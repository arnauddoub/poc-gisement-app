import { PropertyStatus } from 'shared/enums/PropertyStatus'
import { PropertyState } from 'shared/enums/PropertyState'
import { PropertyCategory } from 'shared/enums/PropertyCategory'
import { PropertyType } from 'shared/enums/PropertyType'
import Property from 'App/Models/Property'
import Factory from '@ioc:Adonis/Lucid/Factory'
import LocationFactory from './LocationFactory'

export default Factory.define(Property, ({ faker }) => {
  return {
    status: faker.helpers.enumValue(PropertyStatus),
    state: faker.helpers.enumValue(PropertyState),
    category: faker.helpers.enumValue(PropertyCategory),
    type: faker.helpers.enumValue(PropertyType),
    surface: faker.number.float({ min: 10, max: 150, precision: 0.1 }),
    price: faker.number.int({ min: 10_000, max: 1_000_000 }),
  }
})
  .relation('location', () => LocationFactory)
  .build()
