const fs = require('fs');
const prompt = require('prompt-sync')();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function noteEditor() {

    rl.question(`Seleccionar opción:

    1- Crear nota
    2- Editar nota existente
    3- Eliminar nota

    `, (option) => {
        switch (option) {
            case '1':
                try {
                    document = prompt('Nobre del archivo ');
                    content = prompt('Contenido: ');
                    fs.writeFileSync(`${document}.note`, `${content}`, 'utf-8');
                    console.log('Nota creada con éxito');
                } catch(err) {
                    console.error(err);
                }
                break;
        
            case '2':
                try {
                    console.log(fs.readdirSync(__dirname));
                    document = prompt('Seleccione la nota a editar ');
                    content = prompt('Editar contenido: ');
                    fs.writeFileSync(`${document}.note`, `${content}`, 'utf-8');
                    console.log(`La nota ha sido modificada "${document}.note"`);
                } catch(err) {
                    console.error(err);
                }
                break;
                
            case '3':
                try {
                    document = prompt('¿Qué nota deseas eliminar? ');
                    fs.unlinkSync(`${__dirname}/${document}.note`);
                    console.log(`La nota "${document}.note" ha sido eliminada`);
                } catch(err) {
                    console.error(err);
                }
                break;
        
            default:
                console.log('Introducir una opción válida');
                break;
        }
        rl.close();
    });
}

noteEditor();