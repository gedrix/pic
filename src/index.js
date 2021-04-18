const express =  require('express');
const morgan = require('morgan');
const multer = require('multer');
//const uuid = require('uuid/dist/v4');
const { v4: uuidv4 } = require('uuid');

const path = require('path');

const app = express();
require('./database');

//configuracion
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images/publication'),
    filename: (req, file, cb, filename) => {
        cb(null, uuidv4() + path.extname(file.originalname))
    }
});
app.use(multer({
    storage: storage  
}).single('image'));


//variales globales


//routes
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//iniciar servidor
app.listen(3000, ()=>{
   // console.log('Servidor en el puerto $app{app.get(3000)}');
   console.log(`Servidor en el puerto ${app.get('port')}`);
});  