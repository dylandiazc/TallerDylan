const {model, schema, Schema}=require("mongoose");

const ReservaEsqueleto=Schema({

    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFinal:{
        type:Date,
        required:true
    },
    tipoPaquete:{
        type: String,
        required:true
    }

});

module.exports=model('Reserva',ReservaEsqueleto);