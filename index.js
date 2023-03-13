const express=require('express');
const ejs=require('ejs');
const path=require('path');

const app=express();

// Template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

app.get('/', (req, res)=>{

    res.render('index')
});

app.get('/about', (req, res)=>{

    res.render('about')
});

app.get('/add', (req, res)=>{

    res.render('add')
});

app.get('/post', (req, res)=>{

    res.render('post')
});


const port=3001;

app.listen(port, ()=>{
    console.log(`Server starts at port ${port}`);
})