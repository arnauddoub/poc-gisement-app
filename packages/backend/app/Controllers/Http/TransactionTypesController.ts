import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TransactionType from '../../Models/TransactionType'

export default class TransactionTypesController {
  public async index({ response }: HttpContextContract) {
    const transactionTypes = await TransactionType.all()
    return response.ok(transactionTypes)
  }
}
