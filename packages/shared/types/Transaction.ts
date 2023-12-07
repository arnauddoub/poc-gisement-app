export interface Transaction {
  comment: string
  amount: number
}

export interface TransactionCreate {
  transactionTypeId: number | null
  propertyId: number | null
  comment: string | null
  amount: number | null
}
