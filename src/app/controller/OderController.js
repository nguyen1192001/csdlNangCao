const { queryData } = require('../config')
class OderController {
    index(req, res, next) {
        // connect database
         queryData('select * from [DonDatHang]').then((item) => {
             const oders = item.recordset
             console.log(">>>>.",oders)
             res.render('oders',{oders})
        })
        
    }
}

module.exports = new OderController