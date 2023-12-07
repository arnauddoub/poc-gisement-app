import Factory from '@ioc:Adonis/Lucid/Factory'
import Transaction from '../../app/Models/Transaction'
import TransactionType from '../../app/Models/TransactionType'

export default Factory.define(Transaction, async ({ faker }) => {
  const transactionTypes = await TransactionType.all()

  return {
    transactionTypeId: faker.helpers.arrayElement(transactionTypes).id,
    amount: faker.number.float({ min: -5000, max: 5000, precision: 0.01 }),
  }
}).build()
