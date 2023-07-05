const express  = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{

    let peliculas = [
        {
            titulo:'Super Mario Bross',
            imagen:'https://www.universalpictures-latam.com/tl_files/content/movies/super_mario_bros/posters/03.jpg'
        },
        {
            titulo:'Transformers el despertar de las bestias',
            imagen:'https://www.america-retail.com/static//2023/06/transformers2.jpg'
        },
        {
            titulo:'Flash',
            imagen:'https://pics.filmaffinity.com/Flash-698849219-large.jpg'
        }
    ]

    context = {
        peliculas:peliculas
    }
    res.render('index',context)
})

app.listen(5000)
console.log('http://localhost:5000')