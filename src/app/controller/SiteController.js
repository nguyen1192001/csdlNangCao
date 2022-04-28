class SiteController {
    index(req, res, next) {
        res.render('home')
    }
    authen(req, res, next) {
        res.render('authentication')
    }
}

module.exports = new SiteController