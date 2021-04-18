const express =  require('express');
const morgan = require('morgan');
const multer = require('multer');

const path = require('path');

const app = express();

//configuracion
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(multer({dest: path.join(__dirname, 'public/images/publication')}).single('image'));


//variales globales


//routes
app.use(require('./routes/index'));
//archivos estaticos


//iniciar servidor
app.listen(3000, ()=>{
   // console.log('Servidor en el puerto $app{app.get(3000)}');
   console.log(`Servidor en el puerto ${app.get('port')}`);
});  