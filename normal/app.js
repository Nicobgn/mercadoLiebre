const express = require('express');
const path = require('path');
const app = express();
const bRoot = path.resolve(__dirname);

//  Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'/views'));
app.use(express.static('public'));

//  Middlewares
app.use((req,res,next)=>{
    console.log(`En ${req.url} se utilizó ${req.method}`);
    next();
});

//  Routes
app.get('/',(req,res)=>{
    res.sendFile(bRoot+'/views/home.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(bRoot+'/views/login.html')
})
app.get('/register',(req,res)=>{
    res.sendFile(bRoot+'/views/register.html')
})

//  Start server
app.listen(app.get('port'),()=>{
    console.log(`Server is running on port ${app.get('port')}`);
})