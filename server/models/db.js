const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://wakaryunus004:wakaryunus004@cluster0.i0e6flh.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})