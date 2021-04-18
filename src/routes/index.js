const { Router, response } = require('express');

const router = Router();
const Image = require('../models/Image');


router.get('/', async (req, res) => {
   // res.send('Pagina inicial');
  const images=  await Image.find();
  res.render('index', {images});
});

router.get('/cargar-imagen', (req, res) =>{
    //res.send('Pagina cargar imagen');
    res.render('cargar-imagen');
});

router.post('/cargar-imagen', async(req, res) =>{
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/images/publication/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    await image.save();
    //console.log(image);
    //res.send('correcto');
    res.redirect('/');

});

router.get('/imagen/:id', (req, res) =>{
    res.send('perfil de imagen');

}); 

router.get('/eliminar/:id/imagen', (req, res) =>{
    res.send('imagen eliminada');

});
module.exports = router;