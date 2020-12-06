const express = require "express";
const app = express();

app.get(req, res => (
	res.send("Tcc sobre Git");
));

app.listen(8001);
