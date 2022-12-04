const router = require('express').Router()


router.get('/' , async(req ,res) =>{
    res.send('articvles')
})


router.get('/new' , async(req ,res) =>{
    res.render('AddArticle')
})




module.exports = router;