function connMongo() {
    var mongoose = require('mongoose');
    var mongoDB = 'mongodb+srv://GDS0353:GDS0353@cluster0.f1otk.mongodb.net/Aplicaciones?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de Conexion a MongoDB'));
}

module.exports = connMongo
