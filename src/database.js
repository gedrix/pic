const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pic', {
    useNewUrlParser: true
})
    .then(db => console.log('base de datos conectado'))
    .catch(err => console.log(err));