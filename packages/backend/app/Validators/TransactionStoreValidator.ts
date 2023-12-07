import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'

export default class TransactionStoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    transactionTypeId: schema.number([rules.exists({ table: 'transaction_types', column: 'id' })]),
    propertyId: schema.number([rules.exists({ table: 'properties', column: 'id' })]),
    comment: schema.string.optional(),
    amount: schema.number(),
  })

  public messages: CustomMessages = {}
}
