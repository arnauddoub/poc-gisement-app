import type { PropertyStatus } from 'shared/enums/PropertyStatus'
import type { PropertyState } from 'shared/enums/PropertyState'
import type { PropertyCategory } from 'shared/enums/PropertyCategory'
import type { PropertyType } from 'shared/enums/PropertyType'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Location from './Location'
import Transaction from './Transaction'

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

  @column()
  public locationId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Location)
  public location: BelongsTo<typeof Location>

  @hasMany(() => Transaction)
  public transactions: HasMany<typeof Transaction>
}
