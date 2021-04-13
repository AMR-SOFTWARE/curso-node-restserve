const { response, request } = require('express');

const usuariosGet = ( req, res ) => {
    const { q, user, password, page=1, limit=10 } = req.query;
    res.json({ 
            'msg': 'metodo get - controller',
            q,
            user,
            password,
            page,
            limit
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'post API - usuariosPost',
        body
    });
}

const usuariosPut = ( req, res ) => {
    const { id } = req.params;
    res.json( {
        'msg': 'metodo put - controller',
        id
     });
}

const usuariosPatch = ( req, res ) => {
    res.json( 'metodo patch - controller' );
}

const usuariosDelete = ( req, res ) => {
    const { id } = req.params;
    res.json( {
        'msj': 'metodo delete - controller',
        id
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}