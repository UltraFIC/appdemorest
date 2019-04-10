//aqui poner cuando arranca aplicacion
//aqui van los modelos que se van a importar
import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import {ENVIRONMENT} from './ENV';
import { toASCII } from 'punycode';
//FIC: se agrego la importacion de las rutas para eventos
import routesEvents from './routes/events.route';

//const app = express();
//FIC: se agregan los dominios de las Acciones de tipo REST
var allowCrossDomain = function(req, res, next) 
{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
//FIC: Se espefica el formato en el que la app trabajara la respuesta de las API's
const app = express().use(bodyparser.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(allowCrossDomain);

app.listen(ENVIRONMENT.SERVER_PORT , async () =>{
    try{
        app.use(allowCrossDomain);
        console.log('¡Successful connection ExpressJS!');
        mongoose.connect(ENVIRONMENT.BD_URL_CONNECTION.DEVELOPING, {useNewUrlParser: true})
            .then(() =>{
                console.log('¡Successful connection MongoDB!');
                app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX, (req, res) => {
                    res.status(200);
                    res.send('¡Hola Mundo!' + '<br/>' +
                    '¡Successful connection MongoDB!' + '<br/>' +
                    '¡Server Web APIs - REST DEMO - ON LINE!'
                    );
                    res.end();
                });
                /*--------------------------- ROUTES FOR SUBMODULES ------------------------*/
                //--------------------------- SUBMODULE DE EVENTS  ---------------------------
                app.use(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.NAME_ROUTE, routesEvents);
                //-------------------------- SUBMODULE SECURITY ------------------------------
                //app.use(ENVIRONMENT.ROUTES_MAIN_MODULES.SECURITY.NAME_ROUTE, routesSecurity);
                /*--------------------------- ROUTES FOR SUBMODULES -----------------------*/
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