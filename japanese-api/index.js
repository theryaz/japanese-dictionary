const PORT = '8082',
			CORS_ORIGIN = process.env.CORS_ORIGIN || "localhost:"+PORT;
// Load basic server packages
const app = require('express')(),
		body_parser = require('body-parser'),
		http = require('http').Server(app),
		url = require('url'),
		cors = require('cors');

// Start listening
http.listen(PORT, ()=>{
	console.log('Started server on port ' + PORT);
});



// Configure https://www.npmjs.com/package/cors to use CORS_ORIGIN from environment variable
app.use(cors({
	'origin': CORS_ORIGIN,
	'credentials':true,
	'optionsSuccessStatus': 200
}));

app.use(body_parser.json()); // ensure we have access to req.body in routes

app.get('/api/v1', (req, res) => {
	res.send('Welcome to the 日本語 API!');
});

app.use((err,req,res,next)=>{
	if(err){
		console.error(err);
		console.error('Error Caught',err.statusCode);
		let message;
		if(process.env.NODE_ENV !== "production"){
			message = err.message;
		}else{
			message = "Internal Server Error";
		}
		res.status(500).json({result:message});
	}else{
		next();
	}
});
