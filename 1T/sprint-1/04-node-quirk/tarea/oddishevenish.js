function oddishevenish(num) {
	
    const numbers = Array.from(num.toString()).map(Number);

    const suma = (firstNumber, lastNumber) => firstNumber + lastNumber;

    numbers.reduce(suma) % 2 == 0 ? console.log('Evenish') : console.log('Oddish');

}

oddishevenish(1234);