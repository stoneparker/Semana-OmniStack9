const express = require('express');
const multer = require('multer'); // para a importação de mídia

const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router(); // dando a 'routes' a função de 'roteador'
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store); // toda a resposta à req está no método store de SessionControllers
routes.post('/spots', upload.single('thumbnail'), SpotController.store); // single: uma única imagem (01:44)

routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);
// você sempre está fazendo o booking de algum spot ("no spot tal estou fazendo um booking")

module.exports = routes; // exportação (como export default ***)