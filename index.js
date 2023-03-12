const express=require('express');

const app=express();

app.get('/', (req, res)=>{

    const blog = { id: 1, title: "Blog title", description: "Blog description" }

    res.send(`<h1>${blog.title}</h1> <br/> <p>${blog.description}</p>`)
});


const port=3001;

app.listen(port, ()=>{
    console.log(`Server starts at port ${port}`);
})