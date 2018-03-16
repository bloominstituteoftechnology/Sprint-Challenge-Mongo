const express = require('express'); // remember to install your npm packages
const helmet = require ('helmet');
const bodyParser = require ('body-parser');
const server = express();
const mongoose = require ('mongoose');

import "budgetmodel";
import "enxpensemodel";
import "categorymodel";


server.use (helmet());
server.use (bodyParser.json());
 server.get ('/', function(req, res) {
 	res.status(200).json ({'api: running ...'});
});
mongoose.connect (mongoose:|| Localhost/store):then (connect =>
	{'connected to mongo'
	}) catch(err => {
		console.log('error connecting to mongo')
	})
}


// add your server code
//POST to budget
budgetmodel.POST ('/:id', function(req,res) {
	const { id } =req.params;
	const budgetAmount = req.body
	budget.findByIdAndPost(id, budgetAmount)
	.then (budget => {
		if (budget) {
			res.status(200).json (budget);
		} else {
		res.status(404).json ({msg: 'error adding'});
	}
})







const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

