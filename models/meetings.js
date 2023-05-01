const mongoose = require('mongoose')
const schema = mongoose.Schema


const MeetingsSchema = new schema ({
    date:{type: 'string'},
    time:{type: 'string'},
    message:{type: 'string'},
},
{timestamps: true}
)

module.exports = mongoose.model('Meetings', MeetingsSchema)