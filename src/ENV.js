
//------------------------------------------------------------------------------
//FIC: Area de definicion de puertos y conexion a la base de datos del proyecto
//------------------------------------------------------------------------------
export const ENVIRONMENT = 
{
    SERVER_PORT: process.env.PORT || 3001,
     BD_URL_CONNECTION:
       {
            TESTING: '',
            //DEVELOPING: 'mongodb://AdminMongo:pinocho69@localhost:27017/db_eva_100',    //Local
            DEVELOPING: 'mongodb://dragon:pinocho69@ds219055.mlab.com:19055/eva_soft',
            PRODUCTION: ''
       },
       ROUTES_MAIN_MODULES:
       {
           INDEX: '/'
       }

   
};



//------------------------------------------------------------------------------
//FIC: Area de funciones del proyecto
//------------------------------------------------------------------------------
export const FORMATS_FOR_DATE_AND_TIME = (date = new Date()) =>{
    return {
        DATE_STANDARD: date,//"2019-02-15T01:46:56.230Z"
        DATE_STRING: date.toDateString(),//"Fri Feb 15 2019"
        DATE_ISO: date.toISOString(),//"2019-02-15T01:46:56.230Z"
        DATE_UTC: date.toUTCString(),//"Fri, 15 Feb 2019 01:46:56 GMT"
        TIME_STANDARD: date.toTimeString(),//"01:46:56 GMT+0000 (Coordinated Universal Time)"
        DATE_TIME_SUBDOCUMENT:{
            DATE:{
                YEAR: date.getFullYear(),//2019
                MONTH: date.getMonth()+1,//2
                DAY: date.getDate()//15
            },
            TIME:{
                HOUR: date.getHours(),//1
                MINUTES: date.getMinutes(),//46
                SECONDS: date.getSeconds()//56
            }
        },
        DATE:{
            YEAR: date.getFullYear(),//2019
            MONTH: date.getMonth()+1,//2
            DAY: date.getDate()//15
        },
        TIME:{
            HOUR: date.getHours(),//1
            MINUTES: date.getMinutes(),//46
            SECONDS: date.getSeconds()//56
        },
        DAY_WEEK: {
            NUMBER: date.getDay(),//5
            TEXT: GET_DAY_WEEK_TEXT(date.getDay())//"VIERNES"
        }
    }
};