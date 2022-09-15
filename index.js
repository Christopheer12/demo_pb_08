const path = require('path')

const express = require('express');
const apiRoutes = require('./routers/app.routers');
const { url } = require('inspector');
const loggerMiddleware = require('./middlewares/logger')


const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',apiRoutes)
app.use(express.static('nav-app'))

app.use(loggerMiddleware)

/* app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./nav-app/index.html'))
})

app.get('/styles.css',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./nav-app/styles.css'))
})

app.get('/browser-app.js',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./nav-app/browser-app.js'))
})

app.get('/logo.svg',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./nav-app/logo.svg'))
}) */


const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})
