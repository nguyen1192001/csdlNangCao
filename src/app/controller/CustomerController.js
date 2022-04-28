const { queryData } = require('../config')
class CustomerController {
    index(req, res, next) {
        // connect database
        queryData('select * from [KhachHang]').then((item) => {
            const customer = item.recordset
            console.log(">>>>.", customer)
            res.render('customer', { customer })
        })

    }
    deleteCustommer(req, res, next) {
        const id = req.params.id
        console.log(">>>>>>>query", "delete from [SanPham] where [MaSP] = " + "'" + id + "'")

        queryData("delete from [SanPham] where MaSP = " + "'" + id + "'").then((item) => {
            console.log(">>>>>>>>..", item)
            res.redirect('/customer')
        })
        
       
    }
    updateCustommer(req, res, next) {
        const id = req.params.id
        console.log("reqParam", req.query)
        let { tenkh, ngaysinh,diachi, gioitinh, email} = req.query

        console.log("update [KhachHang] " + " set TenKH = " + "'" + tenkh + "'," + "NgaySinh = " + "'" + ngaysinh + "'," + "DiaChi =" + "'" + diachi + "'" + "," + "GioiTinh =N" + "'" + gioitinh + "'" + "," + "Email =" + "'" + email + "'"+ " where MaKH = "  + id  )

        queryData("update [KhachHang] " + " set TenKH = " + "'" + tenkh + "'," + "NgaySinh = " + "'" + ngaysinh + "'," + "DiaChi =" + "'" + diachi + "'" + "," + "GioiTinh =N" + "'" + gioitinh + "'" + "," + "Email =" + "'" + email + "'"+ " where MaKH = "  + id  ).then((item) => {
            console.log(">>>>>>>>..", item)
           res.redirect('/customer')
        })
        
       
    }
    addCustommer(req, res, next) {
        res.render('formAddCustommer')
    }
    addDBCustommer(req, res, next) {

        console.log("reqParamStaffAdd >>>", req.query)
       
        let Maloai = 'L001'
       
        let { tenkh,sdt, ngaysinh,diachi, gioitinh, email} = req.query
        
        console.log("insert into [KhachHang]  values ('" + tenkh + "','" + sdt + "','" + ngaysinh + "','" + diachi + "','" + gioitinh+ "','" + email + "'," + "NEWID()" + ")")
        queryData("insert into [KhachHang]  values ('" + tenkh + "','" + sdt + "','" + ngaysinh + "','" + diachi + "','" + gioitinh+ "','" + email + "'," + "NEWID()" + ")").then((item) => {
            console.log(">>>>>>>>..", item)
           res.redirect('/customer')
        }).catch((err) => {
            console.log("error add staff", err)
        })

    }
}

module.exports = new CustomerController