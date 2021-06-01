const { Router }=require('express');

const { buscarReservacion }=require('../controllers/controladorReservacion.js');
const { idReservacion }=require('../controllers/controladorReservacion.js');
const { agregarReservacion }=require('../controllers/controladorReservacion.js');
const { editarReservacion }=require('../controllers/controladorReservacion.js');
const { eliminarReservacion }=require('../controllers/controladorReservacion.js');

const {validarPeticion}=require('../validations/validaciones.js');

const {check}=require('express-validator');

let validaciones=Array(

    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('apellido',"El apellido es obligatorio").not().isEmpty(),
    check('telefono',"El telefono es obligatorio").not().isEmpty(),
    check('fechaInicio',"La fecha incio es obligatoria").not().isEmpty(),
    check('fechaFinal',"La fecha final es obligatoria").not().isEmpty(),
    check('tipoPaquete',"El tipo de paquete es obligatorio").not().isEmpty(),
    validarPeticion

);

const rutas=Router();


rutas.get('/reservas',buscarReservacion);
rutas.get('/reserva/:id',idReservacion);
rutas.post('/reserva/nuevo',validaciones,agregarReservacion);
rutas.put('/reserva/editar/:id',editarReservacion);
rutas.delete('/reserva/eliminar/:id',eliminarReservacion);

module.exports=rutas;