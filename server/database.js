const mongoose = require('mongoose')

mongoose.connect('mongodb://database/fondos-btg')
    .then(db => console.log('Db is connected to', db.connection.host))
    .catch(err => console.error(err));
