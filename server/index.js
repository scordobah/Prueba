const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')

const app = express();

require('./database');

// Model
const { clientsTask } = require('./models/Tasks')
const { fundsTask } = require('./models/Tasks')
const { transactionTask } = require('./models/Tasks')
const { suscriptionTask } = require('./models/Tasks')

// Middleware
app.use(bodyParser.json());

//Cors
const cors = require('cors')
app.use(cors())

// Routes
app.get('/api/funds', async (req,res) => {
    await fundsTask.find()
    .then(allRecords => res.json(allRecords))
})

app.get('/api/clients', async (req,res) => {
    await clientsTask.find()
    .then(allRecords => res.json(allRecords))
})


app.get('/api/clients/:clientName', async (req,res) => {
    await clientsTask.findOne({clientName: req.params.clientName})
    .then(record => res.json(record))
})

app.get('/api/funds/:fundName', async (req,res) => {
    await fundsTask.findOne({fundName: req.params.fundName})
    .then(record => res.json(record))
})

app.get('/api/transactions/:clientName', async (req,res) => {
    await transactionTask.find({clientName: req.params.clientName})
    .then(record => res.json(record))
})

app.get('/api/suscriptions/:clientName', async (req,res) => {
    await suscriptionTask.find({clientName: req.params.clientName })
    .then(record => res.json(record))
})

app.post('/api/clients', async (req, res) => {
        const post = new clientsTask({
            clientName: req.body.clientName,
            clientType: req.body.clientType,
            documentId: req.body.documentId,
            email: req.body.email,
            balance: req.body.balance,
        });
        post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        });
});

app.post('/api/funds', async (req, res) => {
    const post = new fundsTask({
        fundName: req.body.fundName,
        fundType: req.body. fundType,
        fundMoney: req.body.fundMoney,
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err })
    });
});

app.post('/api/transactions', async (req, res) => {
    const post = new transactionTask({
        operationDate: req.body.operationDate,
        clientName: req.body.clientName,
        fundName: req.body.fundName,
        fundType: req.body.fundType,
        operationType: req.body.operationType,
        fundCost: req.body.fundCost,
        newBalance: req.body.newBalance,
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err })
    });
});

app.post('/api/suscriptions', async (req, res) => {
    const post = new suscriptionTask({
        clientName: req.body.clientName,
        fundName: req.body.fundName,
        fundType: req.body.fundType,
        fundCost: req.body.fundCost
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err })
    });
});

app.put('/api/clients/:clientName', async (req, res) => {
    const { clientName, balance } = req.body
    await clientsTask.findOneAndUpdate({clientName: req.params.clientName}, {clientName: clientName, balance: balance});
    res.json({status: 'Task updated'})
})

app.delete('/api/suscriptions/:id', async (req, res) => {
    await suscriptionTask.findByIdAndRemove(req.params.id);
    res.json({status: 'Task deleted'})
})

app.listen(8080);
console.log('Server on port', 8080);