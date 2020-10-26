
const express = require('express')
const router = new express.Router();
const chalk = require('chalk');

router.get('/', (req, res) => {
    
    console.log(chalk.cyanBright('Called Index Page 💻 '))

    res.render('index', {
    
    })

})


//Does not exist page then 404 error page
router.get('*', (req, res) => res.render('404', {
   
}))

module.exports = router