const messages = require('../models/messages')

class Messages{
    async send(req, res){
        try {
            const {Name, Email, Message, date} = req.body
            const Messages = new messages ({Name, Email, Message, date})
            await Messages.save()
            return res.json({message:"sent"})

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Messages();