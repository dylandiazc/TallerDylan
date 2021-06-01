 const { request, response }=require('express');

const ReservaModelo=require('../models/ReservaModelo.js');

 
 async function buscarReservacion(req=request,res=response){
    
    let datosConsultados=await ReservaModelo.find();

    res.json({
        estado:true,
        mensaje:datosConsultados
    });

 }

 async function idReservacion(req=request, res=response){
     
    let id=req.params.id;
    let datosId=await ReservaModelo.findById();

    res.json({
        estado:true,
        mensaje: datosId
    });

 }

//  
 async function agregarReservacion(req=request,res=response){
     
    let datosReserva=req.body;

    let reserva=new ReservaModelo(datosReserva);
    await reserva.save();

    res.json({
        estado:true,
        mensaje:'Reserva agregada con éxito',
        datos:reserva
    });

}

 async function editarReservacion(req=request,res=response){

    let id=req.params.id;
    let datosReserva=req.body;

    await ReservaModelo.findByIdAndUpdate(id, datosReserva);
     
    res.json({
        estado:true,
        mensaje:'Reserva actualizada con éxito'
    });

 }

 async function eliminarReservacion(req=request,res=response){

    let id=req.params.id;
    await ReservaModelo.findOneAndDelete(id)
     
    res.json({
        estado:true,
        mensaje:'Reserva eliminada con éxito'
    });

 }

module.exports={
    buscarReservacion,
    idReservacion,
    agregarReservacion,
    editarReservacion,
    eliminarReservacion
}