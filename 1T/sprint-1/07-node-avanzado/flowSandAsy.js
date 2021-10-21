function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolve');
        }, ms);
    });
}
/*
function game() {
    console.log('Haloo');
    sleep(1000);
    console.log('Piensa un nº del 1 al 10');
    sleep(3000);
    console.log('Multiplicalo por 9');
    sleep(5000);
    console.log('Suma sus cifras');
    sleep(3000);
    console.log('Restale 5');
    sleep(3000);
    console.log('Espera que lo adivino...');
    sleep(5000);
    console.log('¡¡Es el 4!!');
}
*/
async function game() {
    console.log('Bienvenido');
    await sleep(1000);
    console.log('Piensa un nº del 1 al 10');
    await sleep(3000);
    console.log('Multiplicalo por 9');
    await sleep(5000);
    console.log('Suma sus cifras');
    await sleep(3000);
    console.log('Restale 5');
    await sleep(3000);
    console.log('Espera que lo adivino...');
    await sleep(5000);
    console.log('¡¡Es el 4!!');
}

game();