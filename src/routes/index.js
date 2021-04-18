const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Pagina inicial');
});

router.get('/cargar-imagen', (req, res) =>{
    //res.send('Pagina cargar imagen');
    res.render('cargar-imagen');
});

router.post('/cargar-imagen', (req, res) =>{
    console.log(req.file);
    res.send('correcto');

});

router.get('/imagen/:id', (req, res) =>{
    res.send('perfil de imagen');

}); 

router.get('/eliminar/:id/imagen', (req, res) =>{
    res.send('imagen eliminada');

});
module.exports = router;