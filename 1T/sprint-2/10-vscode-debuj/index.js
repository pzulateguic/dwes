const got = require('got');


(async () => {

	try {

		const response = await got('https://www.youtube.com/watch?v=x0yQg8kHVcI/');
		console.log(response.body);
		//=> '<!doctype html> ...'

	} catch (error) {

		console.log(error.response.body);
		//=> 'Internal server error ...'

	}

})();