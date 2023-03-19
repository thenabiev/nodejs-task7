const express=require('express');
const ejs=require('ejs');
const path=require('path');

const app=express();

const mongoose=require('mongoose');
const Post = require('./models/Post')

// Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db')


// Template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());




// Routes

app.get('/', async (req, res)=>{
    const posts=await Post.find({})

    console.log(posts);

    res.render('index',{
        posts
    })
});
app.post('/', async(req, res)=>{
    await Post.create(req.body);
    console.log(req.body);
    res.redirect('/')
})

app.get('/about', (req, res)=>{

    res.render('about')
});

app.get('/add', (req, res)=>{
    
    res.render('add')
});

app.get('/post', (req, res)=>{
    

    res.render('post')
});

app.get('/post/:id', async (req, res)=>{
    
    const post = await Post.findById(req.params.id);

    res.render('post',{
        post
    })
    
});


const port=3001;

app.listen(port, ()=>{
    console.log(`Server starts at port ${port}`);
})