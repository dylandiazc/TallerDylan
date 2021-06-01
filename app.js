const ServidorModelo=require('./models/ServidorModelo.js');

// paquete de enviroment
require('dotenv').config()
 
let servidor= new ServidorModelo();

servidor.desplegarServidor();
