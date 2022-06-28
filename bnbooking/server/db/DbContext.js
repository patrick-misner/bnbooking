import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ProviderSchema } from '../models/Provider';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Provider = mongoose.model('Provider', ProviderSchema)
}

export const dbContext = new DbContext()
