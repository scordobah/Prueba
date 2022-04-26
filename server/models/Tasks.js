const mongoose = require('mongoose')
const { Schema } = mongoose;

const clientSchema = new Schema({
    clientName: { type: String, required: true },
    clientType: { type: String, required: true },
    documentId: { type: Number, required: true },
    email: { type: String, required: true },
    balance: { type: Number, required: true }
})
const clientsTask = mongoose.model('clientRecords', clientSchema)

const fundsSchema = new Schema({
    fundName: { type: String, required: true },
    fundType: { type: String, required: true},
    fundMoney: { type: Number, required: true}
})
const fundsTask = mongoose.model('fundsRecords', fundsSchema)

const transactionSchema = new Schema({
    operationDate: { type: Date, required: true },
    clientName: { type: String, required: true },
    fundName: { type: String, required: true },
    fundType: { type: String, required: true},
    operationType: { type: String, required: true },
    fundCost: { type: Number, required: true },
    newBalance: { type: Number, require: true }
})
const transactionTask = mongoose.model('transactionsRecords', transactionSchema)

const suscriptionSchema = new Schema({
    clientName: { type: String, required: true },
    fundName: { type: String, required: true },
    fundType: { type: String, required: true},
    fundCost: { type: Number, required: true },
})
const suscriptionTask = mongoose.model('suscriptionsRecords', suscriptionSchema)

module.exports = { 
    clientsTask: clientsTask,
    fundsTask: fundsTask,
    transactionTask: transactionTask,
    suscriptionTask: suscriptionTask
    
}