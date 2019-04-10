//--------------------------------------------------------------------------
//FIC: Imports
//--------------------------------------------------------------------------
//FIC: se importa el framework de express
import express from 'express';
//FIC: Se importan las conexiones a la bd y funciones generales del proyecto
import {ENVIRONMENT} from '../ENV';
//FIC: Se importan los metodos creados en la carpeta de "events.controller.js"
import 
{
    GetZonesList //,
    //otro metodo,
    //otro metodo,
    //etc
} from '../controllers/events.controller';

//FIC: se asignan las funciones y herramientas de express para su uso local.
const router = express.Router();

//----------------------------------------------------------------------------
//FIC: Se definen las acciones Web API's, el llamado de los metodos 
//     y las rutas para su consumo.
//----------------------------------------------------------------------------

//Catalogo de Zonas - cat_zonas
//------------------------------
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ZONES_LIST, GetZonesList );
//router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.OTRA_ACCION, OtroMetodo);
//router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.OTRA_ACCION, OtroMetodo );
//router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.OTRA_ACCION, ETC);

//Otro Catalogo o Coleccion - 
//-------------------------------
//router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.OTRA_ACCION, OtroMetodo );
//router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.OTRA_ACCION, ETC);

//FIC: Exportar las rutas
module.exports = router;