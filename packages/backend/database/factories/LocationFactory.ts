import Location from 'App/Models/Location'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Location, ({ faker }) => {
  return {
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  }
}).build()
