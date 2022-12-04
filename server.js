const { urlencoded } = require('express');
const e = require('express');
const express = require('express')
const app = express()
const path = require("path")
const port = 3000

app.set("/","html");
app.use(express.static(path.join(__dirname,"/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`MON SERVER: localhost: ${port}`)
})