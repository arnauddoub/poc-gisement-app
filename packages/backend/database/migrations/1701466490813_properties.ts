import { PropertyStatus } from 'shared/enums/PropertyStatus'
import { PropertyState } from 'shared/enums/PropertyState'
import { PropertyCategory } from 'shared/enums/PropertyCategory'
import { PropertyType } from 'shared/enums/PropertyType'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'properties'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .enu('status', Object.values(PropertyStatus))
        .notNullable()
        .defaultTo(PropertyStatus.Investigating)
      table.enu('state', Object.values(PropertyState)).notNullable()
      table.enu('category', Object.values(PropertyCategory)).notNullable()
      table.enu('type', Object.values(PropertyType)).notNullable()
      table.float('surface').notNullable()
      table.float('price').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
