const express = require('express')
const app = express()
const expressLayouts= require('express-ejs-layouts')
const ejs = require('ejs')

const indexRouter=require('./routes/index')
const teamRouter=require('./routes/team')

app.set('view engine' , 'ejs')
app.set('views',__dirname +'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',indexRouter)
app.use('/team',teamRouter)
app.listen(process.env.PORT||3000)