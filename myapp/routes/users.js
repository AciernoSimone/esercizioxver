var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/', function (req, res, next) {
    const uri = "mongodb+srv://simoneacierno:Gattone324@cluster0.ccutz.mongodb.net/Cluster0?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
    const collection = client.db("sample_restaurants").collection("restaurants"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);
            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

module.exports = router;