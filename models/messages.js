const mongoose = require('mongoose')
const schema = mongoose.Schema


const MessagesSchema = new schema ({
    Name:{type: 'string'},
    Email: {type: 'string'},
    Message: {type: 'string'},
    
},

{
    timestamps:true
}
)

module.exports = mongoose.model("Messages", MessagesSchema)