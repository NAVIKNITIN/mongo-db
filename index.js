
let mongoose = require('mongoose');


// connection
mongoose
    .connect("mongodb://localhost:27017/darkdb",{ useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=>console.log("connected to database"))
    .catch((error)=>console.log(`something went wrong,${error.message}`))


//Schema
let schema = mongoose.Schema({
    name:{type:String},
    musics:[String],
    singer:{type:String}
});

//collection Model
let Model = mongoose.model("musics",schema);

//create data
async function musicfun() {
    let music = new Model({
        name:"niitin",
        musics:["dil bechara","faded","alone","bhai bhai"],
        singer:"arjit singh"
    });     
    let save=await music.save();
console.log(save);                                                                                                                                                                       
};

//musicfun invoication
musicfun();




