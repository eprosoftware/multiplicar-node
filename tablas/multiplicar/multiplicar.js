//Require 
const fs = require('fs');
const colors = require('colors');

//const fs = require('express');
//const fs = require('./fs');


let listarTabla = (base, limite = 10) => {

    console.log('============================'.green);
    console.log(`==== Tabla de ${ base }====`.green);
    console.log('============================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}
let crearArchivo = (base) => {
    return new Promise((resolver, reject) => {
        if (!Number(base)) {
            reject('No es un múmero');
            return;
        }
        let data = '';

        for (let i = 1; i < 11; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/multiplicar/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolver(`tabla-${ base }.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}