import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Property from './Property'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public propertyId: number

  @column()
  public label: string

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public zipCode: string

  @column()
  public latitude: number

  @column()
  public longitude: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Property)
  public property: BelongsTo<typeof Property>
}
