const sql = require('mssql')
const config = {
    user :'sa',
    password :'123',
    server : 'DESKTOP-VSMGIP2',
    database : "QLShopMyPhamFAKE",
    port: 1433,
    options : {
        enableArithAbort:true,
        trustServerCertificate: true,
        encrypt: false

    }

}
const configServer01 = {
    user :'sa',
    password :'123',
    server : 'DESKTOP-VSMGIP2\\MSSQLSERVER01',
    database : "QLShopMyPhamFAKE",
    port: 1433,
    options : {
        enableArithAbort:true,
        trustServerCertificate: true,
        encrypt: false
    }

}
const configServer02 = {
    user :'sa',
    password :'123',
    server : 'DESKTOP-VSMGIP2\\MSSQLSERVER02',
    database : "QLShopMyPhamFAKE",
    port: 1433,
    options : {
        enableArithAbort:true,
        trustServerCertificate: true,
        encrypt: false

    }

}




const queryData = async (query , serverConfig )=>{
    
    let configServer = {} ;
    switch (serverConfig) {
        case "server":
            configServer = config;
            console.log("switch server",configServer)
            break;
        case "HoChiMinh":
            configServer = {...configServer01}
            console.log("switch hochiminh",configServer)
            break;
        default:
            configServer = {...configServer02}
            console.log("switch hanoi",configServer)
            break;
    }

    // return sql.connect(configServer).then((conn) => { return conn.query(query)
    // .then((result) => {console.log("resulteeee",result) ; return result.recordset })
    // .then(() => conn.close())}
    //    )

    let connect = await sql.connect(configServer)

// query
let result = await sql.query(query)
console.log("result with await ",result.recordset)

// close connection
console.log("close", await connect.close())
return result.recordset
  
}
module.exports = {queryData,config,configServer01,configServer02}