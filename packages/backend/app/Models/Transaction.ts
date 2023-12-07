import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Property from './Property'
import TransactionType from './TransactionType'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public transactionTypeId: number

  @column()
  public comment: string

  @column()
  public amount: number

  @column()
  public propertyId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Property)
  public property: BelongsTo<typeof Property>

  @belongsTo(() => TransactionType)
  public transactionType: BelongsTo<typeof TransactionType>
}
