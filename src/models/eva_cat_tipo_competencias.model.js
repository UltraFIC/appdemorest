import mongoose from 'mongoose';
import {ENVIRONMENT, FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema = mongoose.Schema;

module.exports = mongoose.model('eva_cat_tipo_competencias', new Schema
(
    {
        IdTipoCompetencia:{type: Number},
        DesTipoCompetencia: {type: String},
        Detalle: {type: String},
        Activo: {type: String, default: 'S'},
        Borrado: {type: String, default: 'N'},
        FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioReg: {type: String, default: 'REST'},
        FechaUltMod: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioMod: {type: String, default: 'REST'}
    }
));