const { Router, response } = require('express');

const router = Router();
const Image = require('../models/Image');
const {unlink} = require ('fs-extra');
const path = require('path');
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

router.get('/image/:id', async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('img', { image });
}); 

router.get('/image/:id/delete', async (req, res) => {
    const { id } = req.params;
    const imageDeleted = await Image.findByIdAndDelete(id);
    await unlink(path.resolve('./src/public' + imageDeleted.path));
    res.redirect('/');
});


module.exports = router;