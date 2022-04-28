const { queryData } = require('../config')
class ProductController {
    index(req, res, next) {
        // connect database
         queryData('select * from [SanPham]').then((item) => {
             const product = item.recordset
             console.log(">>>>.",product)
             res.render('products',{product})
        })
        // res.render('products')
    }
    deleteProduct(req, res, next) {
        const id = req.params.id
        console.log(">>>>>>>query", "delete from [SanPham] where [MaSP] = " + "'" + id + "'")

        queryData("delete from [SanPham] where MaSP = " + "'" + id + "'").then((item) => {
            console.log(">>>>>>>>..", item)
            res.redirect('/product')
        })
        
       
    }
    updateProduct(req, res, next) {
        const id = req.params.id
        console.log("reqParam", req.query)
        let { tensp, soluongnhap, soluongban, giaban, donvitinh, tinhtrang} = req.query

        console.log("update [SanPham] " + " set TenSP = " + "'" + tensp + "'," + "SoLuongNhap = " + soluongnhap + "," + "SoLuongBan = " + soluongban + "," + "GiaBan = " + giaban + "," + "DonViTinh = " + "'" + donvitinh + "'," + "TinhTrang =" + "'" + tinhtrang + "'"+ " where MaSP = "  + id  )

        queryData("update [SanPham] " + " set TenSP = " + "'" + tensp + "'," + "SoLuongNhap = " + soluongnhap + "," + "SoLuongBan = " + soluongban + "," + "GiaBan = " + giaban + "," + "DonViTinh = " + "'" + donvitinh + "'," + "TinhTrang =" + "'" + tinhtrang + "'"+ " where MaSP = "  + id  ).then((item) => {
            console.log(">>>>>>>>..", item)
           res.redirect('/product')
        })
        
       
    }
    addProduct(req, res, next) {
        res.render('formAddProduct')
    }
    addDBProduct(req, res, next) {

        console.log("reqParamStaffAdd >>>", req.query)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) ;
    
        let ngaylap = date
   
        let MaShop = 'S001' //  render mashop to config
        let Maloai = 'L001'
       
        let { tensp, soluongnhap,soluongban, giaban, donvitinh,chatlieu,mota,tinhtrang} = req.query
        
        console.log("insert into [SanPham]  values ('" + MaShop + "','" + Maloai + "','" + tensp + "'," + soluongnhap + "," + soluongban + "," + giaban + ",'" + donvitinh + "','" + mota + "','" + tinhtrang+ "','" + chatlieu + "','"+ ngaylap + "'," + "NEWID()" + ")")
        queryData("insert into [SanPham]  values ('" + MaShop + "','" + Maloai + "','" + tensp + "'," + soluongnhap + "," + soluongban + "," + giaban + ",'" + donvitinh + "','" + mota + "','" + tinhtrang+ "','" + chatlieu + "','" + ngaylap + "'," + "NEWID()" + ")").then((item) => {
            console.log(">>>>>>>>..", item)
            queryData('select * from [SanPham]').then((item) => {
                const product = item.recordset
                res.render('products', { product })
            })
        }).catch((err) => {
            console.log("error add staff", err)
        })

    }
}

module.exports = new ProductController