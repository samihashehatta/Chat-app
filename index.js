const express =require('express');
const app = express();
const path = require('path');
const Keys =require('./config/keys');


app.use(express.static(path.join(`${__dirname}/public`)));


app.get('/',(req,res)=>{
   res.render('index.html') 
});





app.listen(Keys.port,()=>{
console.log(`app is running at ${Keys.port}`)
});
