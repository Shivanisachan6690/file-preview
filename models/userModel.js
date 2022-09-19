// { agr hme moonge se kch elements hi lene h to }
const {model,Schema}=require('../connection');

const mySchema=new Schema({
    username : String,
    email : String,
    password : String,
    age : Number
})

module.exports=model ('usersCollection',mySchema);