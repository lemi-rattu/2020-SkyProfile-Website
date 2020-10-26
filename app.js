const path = require('path');
const http = require('http'); //For Socket IO Chatting
const express = require('express');
// const hbs = require('hbs');
const ejs         = require('ejs');

const chalk = require('chalk');
const morgan = require('morgan');

const mainRouter = require('./src/routers/index')

const app = express();
const server = http.createServer(app)//For Socket IO Chatting


const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '/public/')

// [ CONFIGURE .ejs view engine ]
app.use(express.static(publicDirectoryPath))
    .set('views', publicDirectoryPath) //Setup view engine and views location
    .set('view engine', 'ejs')

app.use(express.json())
app.use(morgan('dev'))
app.use(mainRouter)


server.listen(port, () => {
    // Compose multiple styles using the chainable API
    console.log(chalk.blue.bold(`Server is running on port ${port}`));
})