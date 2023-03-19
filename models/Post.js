const mongoose=require('mongoose');

const Schema=mongoose.Schema;

// Connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Create schema

const PostSchema = new Schema({
    
    title:String,
    detail:String,
    dateCreated:{
        type: Date,
        default: Date.now()
    }
    
});

const Post = mongoose.model("BlogModel", PostSchema);

// Post.create({
//     title:"Blog post 1",
//     detail:"Blog detail 1",
   

// });

module.exports=Post;

