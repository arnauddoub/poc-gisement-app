import type { PropertyStatus } from 'shared/enums/PropertyStatus'
import type { PropertyState } from 'shared/enums/PropertyState'
import type { PropertyCategory } from 'shared/enums/PropertyCategory'
import type { PropertyType } from 'shared/enums/PropertyType'
import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Location from './Location'

export default class Property extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: PropertyStatus

  @column()
  public state: PropertyState

  @column()
  public category: PropertyCategory

  @column()
  public type: PropertyType

  @column()
  public surface: number

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Location)
  public location: HasOne<typeof Location>
}
