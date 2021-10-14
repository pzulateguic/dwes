function sevenboon(arr) {
	
    const comprobacion = (numb) => numb === 5;

    arr.some(comprobacion) == true ? console.log('Boom!') : console.log('no hay 5 en el array');

}

sevenboon([3, 5, 7, 9]);