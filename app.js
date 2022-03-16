const express = require('express');
const path = require('path');
const app = express();

//  Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'/views'));
app.use(express.static('public'));

//  Routes
const bRoot = path.resolve(__dirname);
app.get('/',(req,res)=>{
    res.sendFile(bRoot+'/views/home.html')
})

//  Start server
app.listen(app.get('port'),()=>{
    console.log(`Server is running on port ${app.get('port')}`);
})