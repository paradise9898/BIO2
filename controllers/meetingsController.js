const messages = require('../models/meetings')

class Meetings{
    async booking(req, res){
        try {
            const {date, time, message} = req.body
            const Meetings = new messages ({date, time, message})
            await Meetings.save()
            return res.json({message:"success"})

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Meetings();