//-------------------------------------------------------------------
//FIC: Imports requeridos
//-------------------------------------------------------------------
//FIC: Se importa la funcion de fecha y hora
import {FORMATS_FOR_DATE_AND_TIME, GET_TYPE_ASSISTANCE} from "../ENV";
//FIC: Se importan las clases modelos requeridas para los CRUD's
import Cat_zonas from '../models/cat_zonas.model'


//---------------------------------------------------------------------
//FIC: Web Apis CRUD de cat_zonas
//---------------------------------------------------------------------

//FIC: Obtener la lista de Zonas
exports.GetZonesList = async (req, res)=>
{
    console.log('¡In GetZonesList Method!');
    await Cat_zonas.find()
    .then
    (data => 
        {
            console.log('¡There are registers in cat_zones!');
            return (data.length == 0 || data != null) ? res.status(200).json(data) 
                    : res.status(404).send("no se encontraron Zonas ");
        }
    )
    .catch
    (err => 
        {
            console.log('¡In catch error 500 GetZonesList Method!');
            return res.status(500).send(err);
        }
    );
};
