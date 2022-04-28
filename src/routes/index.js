const siteRouter = require('./site')
const productRouter = require('./product')
const staffRouter = require('./staff')
const oderRouter = require('./oder')
const customerRouter = require('./customer')

function route(app){
    app.use('/',siteRouter)
    app.use('/add',siteRouter)
    app.use('/home',siteRouter)
    app.use('/product',productRouter)
    app.use('/staff',staffRouter)
    app.use('/oder',oderRouter)
    app.use('/customer',customerRouter)
      
}
module.exports = route;
