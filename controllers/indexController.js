const indexController ={
    inicio: (req, res) =>{
        res.render('principales/index')
    },
    contacto: (req, res) =>{
        res.render('principales/contacto')
    },
    nosotros: (req, res) =>{
        res.render('principales/nosotros')
    }
}

module.exports = indexController