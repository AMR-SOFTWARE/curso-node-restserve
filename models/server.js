'use strict'
const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // middleware
        this.middlewares();

        // routes
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura y obtencion de datos del body
        this.app.use( express.json() );

        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios.router') );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listenig at port ${this.port}`);
        });
    }
}

module.exports = Server;