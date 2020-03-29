const 
express            = require('express'),
routes             = express.Router(),
OngController      = require('./controllers/OngController'),
IncidentController = require('./controllers/IncidentController'),
ProfileController  = require('./controllers/ProfileController'),
SessionController  = require('./controllers/SessionController');

//Sessão
routes.post('/sessions', SessionController.create);
//Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs', OngController.delete);
//Incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
//Profile
routes.get('/profile', ProfileController.index);

module.exports = routes;