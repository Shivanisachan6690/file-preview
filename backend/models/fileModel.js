// { agr hme moonge se kch elements hi lene h to }
const {model,Schema}=require('../connection');

const mySchema=new Schema({
    file : String,
    thumbnail : String,
    createdAt: Date
})

module.exports=model ('fileCollection',mySchema);