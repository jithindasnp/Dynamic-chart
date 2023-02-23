const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://jdjithin:maitexa2255@cluster0.me79b0j.mongodb.net/chartDB?retryWrites=true&w=majority')
const schema=mongoose.Schema
const dataSchema=new schema({
    student:{type:String},
    mark:{type:String},
    attendence:{type:String},
})
let chartData=mongoose.model('chartData',dataSchema)
module.exports=chartData