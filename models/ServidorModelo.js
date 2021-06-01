const express = require('express');

const cors = require('cors');

const rutas=require('../routes/rutasReservacion.js');

const { conectarBD }=require('../database/conexion.js');

class ServidorModelo{

    constructor(){

        this.app=express();
        this.desplegarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();

    }

    desplegarServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log(`estoy conectado al puerto ${process.env.PORT}`);
        });

    }

    llamarRutasAPI(){

        this.app.use('/',rutas);

    }

    desplegarBaseDatos(){
        conectarBD();
    }

    crearMiddlewares(){

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));

    }


}

module.exports=ServidorModelo;