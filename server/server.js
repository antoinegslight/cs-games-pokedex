var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5678;
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Pokedex' });
});

router.route('/pokemons')

    .get(function(req, res) {
        res.json({
            "pokemons": [
                {
                    "name": "Charmander",
                    "type": "Fire"
                },
                {
                  "name": "Pickachu",
                  "type": "Electric"
                }
            ]
        });
    });

app.use('/pokedex', router);
app.listen(port);

console.log('Listening on port ' + port);
