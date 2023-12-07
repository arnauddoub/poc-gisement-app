import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from '../../Models/Transaction'
import TransactionStoreValidator from '../../Validators/TransactionStoreValidator'

export default class TransactionsController {
  public async index({ response, params }: HttpContextContract) {
    const transactions = await Transaction.query()
      .where('property_id', params.id)
      .preload('transactionType')
      .orderBy('created_at', 'desc')
    return response.ok(transactions)
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(TransactionStoreValidator)
    const transaction = await Transaction.create(payload)
    return response.created(transaction)
  }
}
