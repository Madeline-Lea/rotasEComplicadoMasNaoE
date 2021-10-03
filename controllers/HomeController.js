const HomeController = {


    index:(req, res) => {
        
        let informacao = {
            cursos:["Bem-vindo", "Ao", "Site", "Zoofilia",".","com"]
        };
       return res.render("index", informacao)
    }
};

module.exports = HomeController;