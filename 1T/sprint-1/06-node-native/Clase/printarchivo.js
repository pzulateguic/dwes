const fs = require('fs');

	try {
    		const file = fs.readFileSync(process.argv[2], 'utf8');
    		
		console.log(file);
	
	} catch(error) {
 		
		   console.error(error);
}