//aqui poner cuando arranca aplicacion
//aqui van los modelos que se van a importar
import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import {ENVIRONMENT} from './ENV';

const app = express();

app.listen(ENVIRONMENT.SERVER_PORT , async () =>{
    try{
     //app.use(allowCrossDomain);
        console.log('¡Successful connection ExpressJS!');
        mongoose.connect(ENVIRONMENT.BD_URL_CONNECTION.DEVELOPING, {useNewUrlParser: true})
            .then(() =>{
                console.log('¡Successful connection MongoDB!');
                app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX, (req, res) => {
                    res.status(200);
                    res.send('¡Hola Mundo! ¡Successful connection MongoDB!');
                    res.end();
                });
                /*---------------------------------------RUTAS PARA LOS MODULOS---------------------------------*/
                /*---------------------------------------RUTAS PARA LOS MODULOS---------------------------------*/
                /*---------------------------------------RUTAS PARA LOS MODULOS---------------------------------*/
                //app.use(ENVIRONMENT.ROUTES_MAIN_MODULES.ECOMMERCE.NAME_ROUTE, routesECommerce);
                //app.use(ENVIRONMENT.ROUTES_MAIN_MODULES.SECURITY.NAME_ROUTE, routesSecurity);
                /*---------------------------------------RUTAS PARA LOS MODULOS---------------------------------*/
                /*---------------------------------------RUTAS PARA LOS MODULOS---------------------------------*/
                /*---------------------------------------RUTAS PARA LOS MODULOS---------------------------------*/
        }).catch(err =>{
            app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX, (req, res) => {
                res.status(500);
                res.send('error', { error: err });
                res.end();
            });
        })
    }
    catch (err) {
        app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX, (req, res) => {
            res.status(500);
            res.send('error', { error: err });
            res.end();
        });
    }
 });