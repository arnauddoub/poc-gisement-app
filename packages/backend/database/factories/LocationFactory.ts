import Factory from '@ioc:Adonis/Lucid/Factory'
import Location from '../../app/Models/Location'

export default Factory.define(Location, ({ faker }) => {
  return {
    label: faker.location.streetAddress({ useFullAddress: true }),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  }
}).build()
