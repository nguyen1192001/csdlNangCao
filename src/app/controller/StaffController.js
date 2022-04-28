const { redirect } = require('express/lib/response')
const { queryData } = require('../config')
class StaffController {

   async index(req, res, next) {
        // console.log("params",req.params.server)
        // connect database
    //    console.log("queryyyy result alter", await queryData('select * from [NhanVien]',req.params.server))
       let staff = await queryData('select * from [NhanVien]',req.params.server)
            res.render('staff',{staff})
        

    }
    deleteStaff(req, res, next) {
        const id = req.params.id
        console.log(">>>>>>>query", "delete from [NhanVien] where MaNV = " + "'" + id + "'")

        queryData("delete from [NhanVien] where MaNV = " + "'" + id + "'",req.params.server).then((item) => {
            console.log(">>>>>>>>..", item)
        })
        // queryData('select * from [NhanVien]').then((item) => {
        //     const staff = item.recordset
        //     res.render('staff', { staff })
        // })
        res.redirect('/staff/'+req.params.server)
    }
    updateStaff(req, res, next) {
        const id = req.params.id
        let { tennv, ngaysinh, diachi, sdt, cmtnd, ngaylv, gioitinh } = req.query

        console.log("req,query",req.query)
        console.log("req params",req.params)
        console.log("query update","update [NhanVien] " + " set Tennv = " + "'" + tennv + "'," + "NgaySinh = " + "'" + ngaysinh + "'," + "DiaChi = " + "'" + diachi + "'," + "SDT = " + "'" + sdt + "'," + "CMTND = " + "'" + cmtnd + "'," + "NgayBDLamViec =" + "'" + ngaylv + "'," + "GioiTinh =N" + "'" + gioitinh + "'" + "where MaNV = " + "'" + id + "'")

        queryData("update [NhanVien] " + " set Tennv = " + "'" + tennv + "'," + "NgaySinh = " + "'" + ngaysinh + "'," + "DiaChi = " + "'" + diachi + "'," + "SDT = " + "'" + sdt + "'," + "CMTND = " + "'" + cmtnd + "'," + "NgayBDLamViec =" + "'" + ngaylv + "'," + "GioiTinh =N" + "'" + gioitinh + "'" + "where MaNV = " + "'" + id + "'",req.params.server).then((item) => {
            console.log(">>>>>>>>..", item)
            res.redirect('/staff/'+req.params.server)
        }).catch((err)=>{
            console.log("err",err)
        })
        // queryData('select * from [NhanVien]').then((item) => {
        //     const staff = item.recordset
        // })
    }
    addStaff(req, res, next) {
        res.render('formAddStaff')
        console.log("add nhan vien")
        // queryData('select * from [NhanVien]').then((item) => {
        //     const staff = item.recordset
        //     res.render('staff', { staff })
        // })
    }
    addDBStaff(req, res, next) {
        console.log("reqParamStaffAdd >>>", req.query)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;

        let ngaylv = dateTime
        let munber = Math.floor(Math.random() * 100);
        // queryData('select * from [NhanVien]',req.params.server).then((item) => {
        //     const staff = item.recordset.MaNV
        //     console.log(">>>>.", staff)
        // })
        let manv = "NV" + munber // random with dk
        let GhiChu = "khong co"
        let MaShop = req.params.serve == "HoChinhminh" ? 'S001' : 'S002' //  render mashop to config
        let { tennv, ngaysinh, diachi, sdt, cmtnd, gioitinh } = req.query
        queryData("insert into [NhanVien]  values ('" + manv + "','" + MaShop + "','" + tennv + "','" + ngaysinh + "','" + diachi + "','" + sdt + "','" + cmtnd + "','" + GhiChu + "','" + ngaylv + "'," + "N" +"'"+ gioitinh + "'" + "," + "NEWID()" + ")",req.params.server).then((item) => {
            console.log(">>>>>>>>..", item)
            queryData('select * from [NhanVien]',req.params.server).then((item) => {
                const staff = item.recordset
                res.render('staff', { staff })
            })
        }).catch((err) => {
            console.log("error add staff", err)
        })

    }

}

module.exports = new StaffController