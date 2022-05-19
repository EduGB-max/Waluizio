const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://useradmin:1234@fiaptecnico.zg8lq.mongodb.net/test')
}

module.exports = conn