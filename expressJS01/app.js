const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const path=require('path')
var routes=require('./routes/router')

//configure the application with views in folder and extention ejs
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//middlewear
app.use(bodyParser.urlencoded({extended:false}))
//routes
app.use('/',routes)
app.listen(9090,()=>console.log('server started at 9090 port'))
module.exports=app
