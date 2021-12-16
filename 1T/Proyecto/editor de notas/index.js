const fs = require('fs');
const prompt = require('prompt-sync')();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function noteEditor() {
    rl.question(`Selecciona una de las siguientes opciones:
    1. Crear nota
    2. Editar nota existente
    3. Eliminar nota


    `, (option) => {

        switch (option) {
        
            case '1':

                try {

                    document = prompt('Nombre del archivo:');
                    content = prompt('Contenido del archivo:');
                    fs.writeFileSync(`${document}.note`, `${content}`, 'utf-8');
                    console.log('La nota ha sido creada con éxito');

                } catch(err) {

                    console.error(err);
                }
                break;
        
            case '2':

                try {

                    console.log(fs.readdirSync(__dirname));
                    document = prompt('Seleccionar nota a editar: ');
                    content = prompt('Introducir contenido: ');
                    fs.writeFileSync(`${document}.note`, `${content}`, 'utf-8');
                    console.log(`La nota ha sido modificada "${document}.note"`);

                } catch(err) {

                    console.error(err);
                }
                break;
                
            case '3':

                try {
                    document = prompt('Seleccionar nota a eliminar: ');
                    fs.unlinkSync(`${__dirname}/${document}.note`);
                    console.log(`La nota "${document}.note" ha sido eliminada`);
                } catch(err) {
                    console.error(err);
                }

                break;

        
            default:
                console.log('Selecciona una opcion valida:');
                break;
        }
        rl.close();
    });
}

noteEditor();