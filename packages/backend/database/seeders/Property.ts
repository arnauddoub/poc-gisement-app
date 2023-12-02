import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PropertyFactory from '../factories/PropertyFactory'

export default class extends BaseSeeder {
  public async run() {
    await PropertyFactory.with('location').createMany(10)
  }
}
