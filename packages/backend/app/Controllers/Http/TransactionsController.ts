import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from '../../Models/Transaction'

export default class TransactionsController {
  public async index({ response, params }: HttpContextContract) {
    const transactions = await Transaction.query()
      .where('property_id', params.id)
      .preload('transactionType')
      .orderBy('created_at', 'desc')
    return response.ok(transactions)
  }
}
