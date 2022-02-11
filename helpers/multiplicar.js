const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar=false, multiplicador = 1) => {

    try {

        let salida = '';

        for (let index = 1; index <= multiplicador; index++) {

            salida += `${base} x ${index} = ${base * index}\n`;
        }

        if (listar) {
            console.log('================'.green);
            console.log(colors.blue('Tabla del:'), base);
            console.log('================'.green);

            console.log(salida);
    
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `La tabla-${base}.txt creado`

    } catch (err) {
        throw (err);
    }

}

module.exports = {
    crearArchivo
}