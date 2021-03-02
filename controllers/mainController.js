const controller  = {
    index:(req, res) => {
        res.render("../views/index", {title: 'inicio'});
    }
}

module.exports = controller;