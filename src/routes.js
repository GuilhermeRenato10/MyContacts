const { Router } = require('express');

const ContactController = require('./app/Controllers/ContactController');

const router = Router();

//Criando uma rota com express
// Criando middlewares

router.get(
    '/contacts',
     ContactController.index
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts/', ContactController.store);
router.put('/contacts/:id', ContactController.update);

module.exports = router;
